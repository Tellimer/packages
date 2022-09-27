import sendgrid from '@sendgrid/mail'
import {
  Mailable,
  MailableVersionFactory,
  Personalization as SendgridPersonalization,
} from '@tellimer/mailable'
import asyncPool from 'tiny-async-pool'
import { mailerConfig } from '.'
import { Response } from './response'

sendgrid.setSubstitutionWrappers('', '')

const POOL_LIMIT = 10
const BATCH_SIZE = parseInt(process.env.SENDGRID_BATCH_SIZE || '1000')

export type Person = string | PersonObj | (() => string | PersonObj)

export type PersonObj = {
  name?: string
  email: string
}

export type Personalization = PersonObj &
  Omit<SendgridPersonalization, 'to'> & {
    customArgs?:
      | ((p: Personalization) => Record<string, string>)
      | {
          [key: string]: string
        }
  }

type To = string | Personalization | Personalization[] | string[]

function isPersonalizationList(x: any[]): x is Personalization[] {
  return typeof x[0] !== 'string'
}

function isPersonalization(x: any): x is Personalization {
  return typeof x !== 'string'
}

function isMailableVersionFactory(x: any): x is MailableVersionFactory {
  return typeof x.version === 'function'
}

function getCustomArgs(personalization: Personalization) {
  const args = { ...(personalization.customArgs || {}) }
  for (const key of Object.keys(mailerConfig.customArgs)) {
    args[key] = mailerConfig.customArgs[key]
  }

  return Object.keys(args).length === 0 ? undefined : args
}

function convertPersonalization(personalization: Personalization): SendgridPersonalization {
  const p = {
    to: { email: personalization.email, name: personalization.name || '' },
    cc: personalization.cc,
    bcc: personalization.bcc,
    subject: personalization.subject,
    substitutions: personalization.substitutions,
    customArgs: getCustomArgs(personalization),
  }

  Object.keys(p).forEach(key => p[key] === undefined && delete p[key])

  return p
}

export async function sendVersioned(
  versionFactory: MailableVersionFactory,
  to: To,
): Promise<Response> {
  const mailables: Record<string, Mailable> = {}
  const personalizations = convertToSendgridPersonalizations(to)
  const mailablePersonalizations: Record<string, SendgridPersonalization[]> = {}
  const versions: Record<string, SendgridPersonalization[]> = {}
  const responses: Record<string, [sendgrid.ClientResponse, Record<any, any>][]> = {}
  const html: Record<string, string> = {}

  for (const personalization of personalizations) {
    const v = versionFactory.version(personalization)
    if (!mailablePersonalizations[v.version]) {
      mailablePersonalizations[v.version] = []
    }
    if (!mailables[v.version]) {
      mailables[v.version] = v
    }
    personalization.customArgs = personalization.customArgs || {}
    personalization.customArgs.version = v.version
    mailablePersonalizations[v.version].push(personalization)
  }

  for (const version in mailables) {
    const response = await sendToSendgrid(mailables[version], mailablePersonalizations[version])
    versions[version] = response.versions.default
    responses[version] = response.responses.default
    html[version] = response.html.default
  }

  return {
    personalizations,
    versions,
    responses,
    html,
  }
}

function convertToSendgridPersonalizations(to: To): SendgridPersonalization[] {
  if (Array.isArray(to) && to.length > 0 && isPersonalizationList(to)) {
    return to.map(convertPersonalization)
  } else if (Array.isArray(to)) {
    return to.map(to => ({ to }))
  } else if (isPersonalization(to)) {
    return [convertPersonalization(to)]
  }

  return [{ to }]
}

function convertFrom(from: Person) {
  if (typeof from === 'function') {
    return convertFrom(from())
  }

  if (typeof from === 'string') {
    return from
  }

  return {
    email: from.email,
    name: from.name || '',
  }
}

async function sendToSendgrid(mailable: Mailable, personalizations: SendgridPersonalization[]) {
  const html = await mailable.render()

  const data: sendgrid.MailDataRequired = {
    from: convertFrom(mailable.from),
    subject: mailable.subject,
    customArgs: mailable.customArgs(),
    attachments: await mailable.attachments(),
    html,
    personalizations,
  }

  if (mailable.replyTo) {
    data.replyTo = mailable.replyTo
  }

  const responses = await sendInChunks(data)
  const r = new Response(
    personalizations,
    { default: personalizations },
    { default: responses },
    { default: html },
  )

  return r
}

export async function send(mailable: Mailable | MailableVersionFactory, to: To) {
  if (isMailableVersionFactory(mailable)) {
    return sendVersioned(mailable, to)
  }

  return await sendToSendgrid(mailable, convertToSendgridPersonalizations(to))
}

async function sendInChunks(data: sendgrid.MailDataRequired) {
  const personalizations = [...data.personalizations]
  const sendgridData: sendgrid.MailDataRequired[] = []

  while (personalizations.length > 0) {
    const _data = {
      ...data,
    }
    _data.personalizations = personalizations.splice(0, BATCH_SIZE)
    sendgridData.push(_data)
  }

  const senders: [sendgrid.ClientResponse, Record<any, any>][] = []
  for await (const value of asyncPool(POOL_LIMIT, sendgridData, d => {
    return sendgrid.send(d)
  })) {
    senders.push(value)
  }

  return senders
}
