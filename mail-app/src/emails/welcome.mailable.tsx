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
                dangerouslySetInnerHTML={{__html: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate blanditiis neque consequatur repudiandae </p><blockquote><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate bland</p></blockquote><p>perferendis pariatur nihil! Eveniet quas nulla quam laboriosam veritatis unde consectetur illo autem repudiandae dolorum.</p><ul><li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate bland</p></li><li><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos quas rem ipsam vitae quia pariatur, hic neque</p></li><li><p>Eaque officia sit repellat delectus amet, numquam alias mollitia est iusto. Nisi?</p></li></ul><h2>This is a heading</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate blanditiis neque <a target="_blank" rel="noopener noreferrer nofollow" href="https://localhost.com/api/graphql">here is a link</a> consequatur repudiandae perferendis pariatur nihil! Eveniet quas nulla quam laboriosam veritatis unde consectetur illo autem repudiandae dolorum.</p><ol><li><p>ordered</p></li><li><p>list</p></li><li><p>here</p></li><li><p>another one</p></li></ol><h3>A subheading</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate blanditiis neque consequatur repudiandae perferendis pariatur nihil! Eveniet quas nulla quam laboriosam veritatis unde consectetur illo autem repudiandae dolorum.</p><figure><img src="https://d1e23yf52y86uu.cloudfront.net/files/hkyk82q2s-1r.jpg" alt="" title="This is a building somewhere in the states"><figcaption>This is a building somewhere in the states</figcaption></figure><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur, libero quia nisi architecto provident consequatur quod, quasi aliquid officia animi recusandae ducimus? Vitae, sequi voluptatem. Expedita cum excepturi aut?</p>`}}>
              </div>
        </EmailSection>
        <EmailSection pad={16}>

          <EmailDesktopOnly>
            <EmailAutosizeButton style='outline' align="center" fontSize={14} title="Write your first post" color="#111827" background="#D1D5DB" href="#" />
          </EmailDesktopOnly>
          <EmailMobileOnly>
            <EmailAutosizeButton style='outline' align="center" fontSize={20} title="Write your first post" color="#111827" background="#D1D5DB" href="#" />
          </EmailMobileOnly>
        </EmailSection>
      </>
    )
  }
}
