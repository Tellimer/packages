import { Mailable } from './mailable'
import { Personalization } from './personalization'

export abstract class MailableVersion extends Mailable {
  abstract version: string

  addCustomArg(personalization: Personalization) {
    if (!personalization.customArgs) {
      personalization.customArgs = {}
    }

    personalization.customArgs.version = this.version
  }
}

export abstract class MailableVersionFactory {
  abstract version(personalization: Personalization): MailableVersion
}
