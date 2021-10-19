import React from 'react'
import { Mailable } from '@tellimer/mailable'

export class TestMailable extends Mailable {
  from = 'test@test.com'
  subject = 'test'
  view () {
    return <div></div>
  }
}
