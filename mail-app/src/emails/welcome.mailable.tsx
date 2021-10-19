import React from 'react'
import { Mailable, Components } from '@tellimer/mailable'
import { Email } from './email'

const { EmailRow, EmailCol, EmailTable, EmailImage, EmailLink, EmailHr, EmailSection, EmailButton } = Components

export class WelcomeMailable extends Email {
  subject = 'test'

  email() {
    return (
      <>
        <EmailSection center className="text-4xl font-bold">
          Welcome to Tellimer!
        </EmailSection>
        <EmailSection center pad={32}>
          <EmailImage src="https://cdn.tellimer.com/email-help/welcome.png" width={144} height={144} alt="Welcome to Tellimer!" />
        </EmailSection>
        <EmailSection center>
          <p>
            Do something great!
          </p>
        </EmailSection>
        <EmailSection center pad={16}>
          <EmailButton align="center" width={250} background="#02778F" yPadding={16} href="#">
            View our latest
          </EmailButton>
        </EmailSection>
      </>
    )
  }
}
