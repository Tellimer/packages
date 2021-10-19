import React from 'react'
import { Components, MailableVersion } from '@tellimer/mailable'

export class BMailable extends MailableVersion {
  version = 'B'
  subject = 'This is version B'

  from = {
    name: 'Tellimer Support',
    email: 'support@tellimer.com',
  }

  view () {
    return (
      <Components.Email>
        You are receiving version B of the email
      </Components.Email>
    )
  }
}
