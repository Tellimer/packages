import { ClientResponse } from '@sendgrid/client/src/response'
import { Personalization } from '@tellimer/mailable'

export class Response {
  constructor(
    public readonly personalizations: Personalization[],
    public readonly versions: Record<string, Personalization[]>,
    public readonly responses: Record<string, [ClientResponse, Record<any, any>][]>,
    public readonly html: Record<string, string>,
  ) {}
}
