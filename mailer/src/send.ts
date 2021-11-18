import sendgrid from '@sendgrid/mail'
import {
  Mailable,
  MailableVersionFactory,
  Personalization as SendgridPersonalization,
} from '@tellimer/mailable'
import { mailerConfig } from '.'
import { Response } from './response'

sendgrid.setSubstitutionWrappers('', '')

export type Person = string | PersonObj

export type PersonObj = {
  name?: string
  email: string
}

export type Personalization = PersonObj & Omit<SendgridPersonalization, 'to'>

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
    to: { email: personalization.email, name: personalization.name },
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

async function sendToSendgrid(mailable: Mailable, personalizations: SendgridPersonalization[]) {
  const html = await mailable.render()

  const data: sendgrid.MailDataRequired = {
    from: mailable.from,
    subject: mailable.subject,
    customArgs: mailable.customArgs(),
    html,
    personalizations,
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
  const senders: Promise<[sendgrid.ClientResponse, Record<any, any>]>[] = []

  while (personalizations.length > 0) {
    data.personalizations = personalizations.splice(0, 1000)

    // data.mailSettings = { sandboxMode: { enable: true } }
    // console.log(JSON.stringify(data, undefined, 2))
    senders.push(sendgrid.send(data))
  }

  return await Promise.all(senders)
}
