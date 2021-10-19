import React from 'react'
import { Email } from '../src/components/email';
import { Mailable } from '../src/mailable';


export class TestMailable extends Mailable {
  subject = 'this is a subject'

  from = {email: 'test@test.com'}

  view() {
    return (
      <Email>
        <div>
          this is an email, dood
        </div>
      </Email>
    )
  }

  css() {
    return 'a { color: red; }'
  }
}

export class ScssTest extends TestMailable {
  view() {
    return <div className="pl-1">test</div>
  }
}

export class MailableWithVariables extends Mailable<[':token']> {
  subject = 'this is a subject'

  from = {email: 'test@test.com'}

  view() {
    return <div>:token</div>
  }
}
