# @tellimer/mailable

Allows you to create React components that render to email HTML

## Example mailable
```tsx
import React from 'react'
import { Components, Mailable } from '@tellimer/mailable'

export class ExampleMailable extends Mailable {
  // This is required
  subject = 'Test'

  // This is required, can be just a string (containing email)
  from = {
    name: 'Tellimer Test',
    email: 'test@test.com',
  }
  // OR from = 'test@test.com'

  // Does not have to return a promise, but allows for it
  async view () {
    const somethingElse = await new Promise((resolve) => setTimeout(() => resolve('hello'), 500))

    return <div>This is an email!</div>
  }
}

// .........

const mailable = new ExampleMailable()
mailable.render().then(html => console.log(html))

```

Would output the following HTML

```html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="margin: 0; padding: 0; font-size: 16px; color: #242424; font-family: Arial, Helvetica, Verdana, Tahoma, sans-serif;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Test</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
</head>
<body style="background: #eaeaea; margin: 0; padding: 0; font-size: 16px; color: #242424; font-family: Arial, Helvetica, Verdana, Tahoma, sans-serif;">
  <div data-reactroot>This is an email!</div>
</body>
</html>
```

## Versioned example

First, you must create some versions of the email. These versions must be `MailableVersion`, which extends the `Mailable` class. The only new property in this class, is the `version` property, which is required.

Then, you must create a class that extends `MailableVersionFactory`. This will contain a method `version` that returns the correct `MailableVersion` to send to a person.

```tsx
import React from 'react'
import {
  Components,
  Mailable,
  MailableVersion,
  MailableVersionFactory,
  Personalization
} from '@tellimer/mailable';

const { Email } = Components

export class Versioned extends MailableVersionFactory {
  version(personalization: Personalization) {
    return parseInt(personalization.customArgs?.userId, 10) % 2 === 0 ? new VersionA() : new VersionB()
  }
}

class VersionA extends MailableVersion {
  version = 'A'
  subject = 'this is a subject for A'
  from = {email: 'test@test.com'}

  view() {
    return (
      <Email>
        <div>
          for version B
        </div>
      </Email>
    )
  }
}

class VersionB extends MailableVersion {
  version = 'B'
  subject = 'this is a subject for B'
  from = {email: 'test@test.com'}

  view() {
    return (
      <Email>
        <div>
          for version B
        </div>
      </Email>
    )
  }
}
```


### Components
Run storybook to see more information!

`yarn storybook`

```
<Email header?={React.ReactComponent} footer?={React.ReactComponent}>
<EmailRow>
<EmailCol>
```
