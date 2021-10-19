# @tellimer/mailer

Sends a `@tellimer/mailable` instance through Sendgrid

### [Example - Sending 1 email](https://github.com/Tellimer/mailer/tree/master/example/single-email)

Given this mailable:

```tsx
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

```

You can send via:

```ts
import {ConfirmEmailMailable} from './mailable'
import {send} from '@tellimer/mailer'

const mailable = new ConfirmEmailMailable('this-be-the-token')

send(mailable, 'tim.feid@tellimer.com')

// OR

send(mailable, {email: 'tim.feid@tellimer.com', name: 'Tim Feid'})
```

### [Example - Sending mass emails](https://github.com/Tellimer/mailer/tree/master/example/mass-email)

Given this mailable:

```tsx
import React from 'react'
import { Components, Mailable } from '@tellimer/mailable'

export class MassEmailMailable extends Mailable {
  subject = 'Hi :first_name!'

  from = {
    name: 'Tellimer Support',
    email: 'support@tellimer.com',
  }

  view () {
    return (
      <Components.Email>
        <Components.EmailRow>
          <Components.EmailCol>
            <p>
              Hello :first_name:,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Eligendi ipsum suscipit cupiditate illo! Amet officia eius fugiat fuga quis.
            </p>
            <p>
              Ex provident ullam pariatur quia dolores architecto deserunt explicabo, maxime hic.
            </p>
            <p>
              Looks like we can contact you at :phone_number.
            </p>
            <p>
              Thanks!
            </p>
          </Components.EmailCol>
        </Components.EmailRow>
      </Components.Email>
    )
  }
}
```

You can send via:

```ts
import {MassEmailMailable} from './mailable'
import {send} from '@tellimer/mailer'

const mailable = new MassEmailMailable()

send(mailable, [
  {email: 'tim.feid@tellimer.com', name: 'Tim Feid', substitutions: {':first_name': 'Tim', ':phone_number': 'xxx-xxx-xx35'}},
  {email: 'tim.feid2@tellimer.com', name: 'Joe Shmoe', substitutions: {':first_name': 'Joe', ':phone_number': 'xxx-xxx-xx75'}},
]).then(result => console.log(result))
```

Will look something like this:
![image](https://user-images.githubusercontent.com/4679832/137797315-6b829d46-0a0b-479d-b09c-8f1c6eb53554.png)

### [Example - A/B Testing emails](https://github.com/Tellimer/mailer/tree/master/example/ab-test)

You can send multiple different emails to A/B test.
