import React from 'react'
// @ts-ignore
import { Mailable, Components } from '../../../mailable/src'
import { Email } from './email'

const { EmailRow, EmailCol, EmailTable, EmailImage, EmailLink, EmailHr, EmailSection, EmailAutosizeButton } = Components

export class ActivationMailable extends Email {
  subject = 'test'

  email() {
    return (
      <>
        <EmailSection center className="text-4xl font-bold">
          Activate your account
        </EmailSection>
        <EmailSection center pad={32}>
          <EmailImage src="https://cdn.tellimer.com/email-help/activate.png" width={144} height={144} alt="Activate your account" />
        </EmailSection>
        <EmailSection center>
          <p>
            You're almost there, Tim Feid
          </p>
          <p>
            Just click the button below to activate your account.
          </p>
        </EmailSection>
        <EmailSection center pad={16}>
          <EmailAutosizeButton align="center" background="#02778F" yPadding={16} href="#" title="Activate your account" />
        </EmailSection>
      </>
    )
  }
}
