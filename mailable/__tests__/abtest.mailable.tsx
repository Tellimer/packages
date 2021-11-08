import React from 'react'
import { Email } from '../src/components/email'
import { MailableVersion, MailableVersionFactory } from '../src/mailable-version'
import { Personalization } from '../src/personalization'

export class Versioned extends MailableVersionFactory {
  version(personalization: Personalization) {
    return parseInt(personalization.customArgs?.userId, 10) % 2 === 0
      ? new VersionA()
      : new VersionB()
  }
}

export class VersionA extends MailableVersion {
  version = 'A'
  subject = 'this is a subject for A'
  from = { email: 'test@test.com' }

  view() {
    return (
      <Email>
        <div>for version B</div>
      </Email>
    )
  }
}

export class VersionB extends MailableVersion {
  version = 'B'
  subject = 'this is a subject for B'
  from = { email: 'test@test.com' }

  view() {
    return (
      <Email>
        <div>for version B</div>
      </Email>
    )
  }
}
