import React from 'react'
import { MailableVersion } from '@tellimer/mailable'

export class VersionAMailable extends MailableVersion {
  version = 'A'
  from = 'test@test.com'
  subject = 'test for A'
  view () {
    return <div>A!</div>
  }
}

export class VersionBMailable extends MailableVersion {
  version = 'B'
  from = 'test@test.com'
  subject = 'test for B'
  view () {
    return <div>B!</div>
  }
}
