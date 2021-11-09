import React from 'react'
// @ts-ignore
import { Mailable, Components } from '../../../mailable/src/index'
import { Email } from './email'

const { EmailRow, EmailCol, EmailTable, EmailImage, EmailLink, EmailHr, EmailSection, EmailAutosizeButton } = Components

export class WelcomeMailable extends Email {
  subject = 'test'

  email() {
    return (
      <>
        <EmailSection center padBottom={16} className="text-4xl">
          Welcome to Scriber, :name!
        </EmailSection>
        <EmailSection center pad={16}>
          <p>
            You've just created your publication on Scriber, and joined a growing community of content creators.
          </p>
          <p>
            We're thrilled to have you - now it's time to start writing.
          </p>
        </EmailSection>
        <EmailSection center pad={16}>
          <EmailAutosizeButton align="center" title="Write your first post" background="#4F46E5" href="#" />
        </EmailSection>
        <EmailSection pad={16}>
          <p>
            Become a top Scriber
          </p>

          <p>
            To help you get started, we've put together some top tips to writing world-class content.
          </p>

          <q>This is a test that goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores id adipisci quisquam optio corporis beatae magnam, libero necessitatibus quia, aliquid quae doloremque quidem eius voluptate voluptatibus, illo explicabo quaerat!</q>

          <p>
            From starting a newsletter to getting your first subscribers, head to the Scriber Resources to read more.
          </p>
        </EmailSection>
      </>
    )
  }
}
