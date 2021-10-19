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
              Hello :first_name,
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
