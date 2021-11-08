import React from 'react'
import { Email } from '../src/components/email'
import { EmailImage } from '../src/components/email-image'
import { Mailable } from '../src/mailable'

export class TestMailable extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }

  view() {
    return (
      <Email>
        <div>this is an email, dood</div>
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

export class MailableWithVariables extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }

  view() {
    return <div>:token</div>
  }
}

export class TestMaxWidthImage extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }
  maxImageWidth = 520

  view() {
    return (
      <Email>
        <div>
          <EmailImage src="https://test.com/large.png" alt="" />
        </div>
      </Email>
    )
  }

  css() {
    return 'a { color: red; }'
  }
}

export class TestMaxWidthUnderSizeImage extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }
  maxImageWidth = 520

  view() {
    return (
      <Email>
        <div>
          <EmailImage src="https://test.com/small.png" alt="" />
        </div>
      </Email>
    )
  }

  css() {
    return 'a { color: red; }'
  }
}

export class TestMaxWidthWithAWidth extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }
  maxImageWidth = 520

  view() {
    return (
      <Email>
        <div>
          <EmailImage src="https://test.com/large.png" width={200} alt="" />
        </div>
      </Email>
    )
  }

  css() {
    return 'a { color: red; }'
  }
}

export class TestMaxWidthWithAHeight extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }
  maxImageWidth = 520

  view() {
    return (
      <Email>
        <div>
          <EmailImage src="https://test.com/large.png" height={50} alt="" />
        </div>
      </Email>
    )
  }
}

export class TestMaxWidthNoResizeImage extends Mailable {
  subject = 'this is a subject'

  from = { email: 'test@test.com' }
  maxImageWidth = 520

  view() {
    return (
      <Email>
        <div>
          <EmailImage src="https://test.com/large.png" noResize alt="" />
        </div>
      </Email>
    )
  }
}
