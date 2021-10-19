export type Email = EmailData | EmailData[]

export type EmailData = string | { name?: string; email: string }

export interface Personalization {
  to: Email
  cc?: Email
  bcc?: Email
  subject?: string
  headers?: { [key: string]: string }
  substitutions?: { [key: string]: string }
  dynamicTemplateData?: { [key: string]: any }
  customArgs?: { [key: string]: string }
  sendAt?: number
}
