import React from 'react'
import { Components, Mailable } from '@tellimer/mailable'

export class ConfirmEmailMailable extends Mailable {
  constructor (private readonly token: string) {
    super()
  }

  subject = 'Please confirm your email address'

  from = {
    name: 'Tellimer Support',
    email: 'support@tellimer.com',
  }

  view () {
    return (
      <Components.Email>
        Thank you for registering with us.
        <Components.EmailButton href={`https://tellimer.com/confirm/${this.token}`}>
          Confirm your email
        </Components.EmailButton>
      </Components.Email>
    )
  }
}
