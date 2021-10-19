import React from 'react'
import { Components, Mailable } from '.'

const { Email, EmailRow, EmailCol, EmailTable, EmailButton } = Components

export class ExampleMailable extends Mailable {
  constructor(private readonly token: string) {
    super()
  }

  subject = 'Test'

  from = {
    email: 'test@test.com',
  }

  async view() {
    const somethingElse = await new Promise(resolve => setTimeout(() => resolve('hello'), 500))

    const header = (
      <EmailTable>
        <EmailRow>
          <EmailCol className="pb-4">
            <img src="https://cdn.tellimer.com/newsletters/today-header.png" height="48" />
          </EmailCol>
        </EmailRow>
      </EmailTable>
    )

    const footer = (
      <EmailTable>
        <EmailRow>
          <EmailCol className="pb-4 text-center">
            Osprey
            <br />
            Some address dr, New Jersey 07201
          </EmailCol>
        </EmailRow>
      </EmailTable>
    )

    return (
      <Email header={header} footer={footer}>
        <EmailTable>
          <EmailRow>
            <EmailCol className="py-2">Hi there person,</EmailCol>
          </EmailRow>
          <EmailRow>
            <EmailCol className="py-2">
              this is your token: {this.token} ... {somethingElse}
            </EmailCol>
          </EmailRow>
          <EmailRow>
            <EmailCol className="py-2">
              <EmailButton href="#">This is an awesome test!</EmailButton>
            </EmailCol>
          </EmailRow>
        </EmailTable>
      </Email>
    )
  }
}
