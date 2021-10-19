import React from 'react'
import { Components, MailableVersion } from '@tellimer/mailable'

export class AMailable extends MailableVersion {
  version = 'A'
  subject = 'This is version A'

  from = {
    name: 'Tellimer Support',
    email: 'support@tellimer.com',
  }

  view () {
    return (
      <Components.Email>
        You are receiving version A of the email
      </Components.Email>
    )
  }
}
