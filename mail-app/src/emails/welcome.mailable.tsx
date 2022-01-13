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
        <div
                dangerouslySetInnerHTML={{__html: `<p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dignissimos aperiam enim ipsam quasi dolorem commodi fugiat dolores, dolorum saepe iusto vel nostrum quidem voluptatibus eum fugit quis eaque eveniet!</p><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere debitis, magnam obcaecati tenetur quod veritatis dicta earum maxime quisquam officiis fugiat non beatae natus, molestias officia tempora itaque, asperiores quis.</p><blockquote><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">This is a quotation here</p></blockquote><h2 style="color: #374151; font-size: 20px; line-height: 30px; margin-bottom: 16px; margin-top: 48px;">Heading 2</h2><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique natus soluta odio nihil ducimus iste eos, at, vel maxime officia ipsa ab quaerat modi nemo animi quam corporis sequi.</p><h3 style="color: #374151; font-size: 18px; line-height: 28px; margin-top: 16px; margin-bottom: 16px;">Heading 3</h3><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt explicabo at, exercitationem ducimus quo impedit fugiat soluta maiores harum? Vero minus totam, quod quam consequuntur accusamus eligendi veniam dolorem asperiores?</p><ul style="margin: 0; padding: 0; padding-left: 0; margin-left: 21px; margin-top: 16px; margin-bottom: 16px;"><li style="color: #E5E7EB; font-size: 20px; line-height: 24px;"><span style="line-height: 24px; font-size: 16px; color: #374151;"><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">This is a list of </p></span></li><li style="color: #E5E7EB; font-size: 20px; line-height: 24px;"><span style="line-height: 24px; font-size: 16px; color: #374151;"><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">bullets that should not mess anything up</p></span></li><li style="color: #E5E7EB; font-size: 20px; line-height: 24px;"><span style="line-height: 24px; font-size: 16px; color: #374151;"><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus aliquam! Nostrum provident, culpa ipsa explicabo eligendi, id ducimus obcaecati asperiores necessitatibus sint blanditiis fuga deserunt modi possimus officiis tenetur?</p></span></li></ul><h3 style="color: #374151; font-size: 18px; line-height: 28px; margin-top: 16px; margin-bottom: 16px;">Another heading 3</h3><ol><li style="color: #E5E7EB; font-size: 20px; line-height: 24px;"><span style="line-height: 24px; font-size: 16px; color: #374151;"><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus aliquam! Nostrum provident, culpa ipsa explicabo eligendi, id ducimus obcaecati asperiores necessitatibus sint blanditiis fuga deserunt modi possimus officiis tenetur?</p></span></li><li style="color: #E5E7EB; font-size: 20px; line-height: 24px;"><span style="line-height: 24px; font-size: 16px; color: #374151;"><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">some more bullets</p></span></li><li style="color: #E5E7EB; font-size: 20px; line-height: 24px;"><span style="line-height: 24px; font-size: 16px; color: #374151;"><p style="margin: 0 0 16px; padding: 0; color: #374151; line-height: 24px; margin-bottom: 0;">and stuff</p></span></li></ol>`}}>
              </div>
        </EmailSection>
      </>
    )
  }
}
