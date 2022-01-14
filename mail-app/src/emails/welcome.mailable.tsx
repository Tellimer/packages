import React from 'react'
import { EmailDesktopOnly, EmailMobileOnly } from '../../../mailable/src/components'
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
          <EmailDesktopOnly>
            <EmailAutosizeButton align="center" title="Write your first post" background="#4F46E5" href="#" />
          </EmailDesktopOnly>
          <EmailMobileOnly>
            <EmailAutosizeButton align="center" fontSize={20} title="Write your first post" background="#4F46E5" href="#" />
          </EmailMobileOnly>
        </EmailSection>
        <EmailSection pad={16}>
        <div
                dangerouslySetInnerHTML={{__html: `<p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta hic quibusdam voluptatum, odio ea deleniti dolore! Placeat perferendis facilis, veniam dolorem laborum rem exercitationem voluptate harum, tempore deserunt itaque?</p><div class="email-quote" style="color: #374151; margin-bottom: 16px; border-left: 4px solid #666666; padding-left: 16px; border-color: #0accff;"><span>"</span><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius assumenda modi temporibus in.</span><span>"</span></div><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quae vel fugiat ad autem ab? Minus numquam id nemo illum veniam enim nesciunt, provident ratione, saepe voluptates architecto magnam necessitatibus!</p><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;"></p><h2 style="color: #374151; font-size: 20px; line-height: 30px; margin-bottom: 16px; margin-top: 48px;">Awesome graph</h2><p style="color: #374151; font-size: 18px; line-height: 28px; margin-top: 16px; margin-bottom: 16px;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nesciunt totam eveniet unde deleniti incidunt quae! Eum, veritatis autem maxime, illo ab iusto sit ea assumenda animi rem in ad?</p><h3 style="color: #374151; font-size: 18px; line-height: 28px; margin-top: 16px; margin-bottom: 16px;">A side note</h3><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga natus est necessitatibus tempora corporis aperiam dolore expedita maxime ipsam, illo ratione harum eaque neque accusamus perspiciatis sint temporibus rem.</p><ul style="margin: 0; padding: 0; padding-left: 0; margin-left: 24px; margin-top: 16px; margin-bottom: 16px;"><li style="color: #111827; "><span style="color: #374151; "><p style="line-height: 24px; margin-bottom: 0; margin: 0; padding: 0; display: inline; color: inherit;">A generic list here</p></span></li><li style="color: #111827; "><span style="color: #374151; "><p style="line-height: 24px; margin-bottom: 0; margin: 0; padding: 0; display: inline; color: inherit;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis, impedit, totam voluptatum minus esse distinctio expedita et</p></span></li><li style="color: #111827; "><span style="color: #374151; "><p style="line-height: 24px; margin-bottom: 0; margin: 0; padding: 0; display: inline; color: inherit;">Llibero sunt sint sed cum tempora voluptate beatae nostrum quibusdam necessitatibus provident!</p></span></li></ul><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non, optio laborum repellat nemo maiores, ab, dolorem dicta explicabo eveniet aut vel placeat. Animi quisquam quos temporibus cumque quibusdam fugiat.</p><ol style="margin: 0; padding: 0; padding-left: 0; margin-left: 24px; margin-top: 16px; margin-bottom: 16px;"><li style="color: #111827; line-height: 24px; "><span style="color: #374151; "><p style="line-height: 24px; margin-bottom: 0; margin: 0; padding: 0; display: inline; color: inherit;">Something in a list</p></span></li><li style="color: #111827; line-height: 24px; "><span style="color: #374151; "><p style="line-height: 24px; margin-bottom: 0; margin: 0; padding: 0; display: inline; color: inherit;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique fugit incidunt. Velit voluptates numquam, dolor laboriosam </p></span></li><li style="color: #111827; line-height: 24px; "><span style="color: #374151; "><p style="line-height: 24px; margin-bottom: 0; margin: 0; padding: 0; display: inline; color: inherit;">Odio magnam sunt quaerat modi repudiandae maxime minus explicabo dignissimos dolorum amet aliquam?</p></span></li></ol><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos minus alias tenetur beatae laboriosam dolor eum quasi, delectus quis doloribus mollitia sit impedit aliquam ab in, quisquam quibusdam expedita!</p>`}}>
              </div>
        </EmailSection>
      </>
    )
  }
}
