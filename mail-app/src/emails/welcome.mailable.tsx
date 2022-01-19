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
<EmailSection padBottom={24}>
          <span className="post-title">This is the post title, should look good on multiple lines</span>
        </EmailSection>
        <EmailSection padBottom={24}>
          <EmailTable>
            <EmailRow>
              <EmailCol width={56}>
                <EmailImage
                  className="creator-image"
                  src="https://cdn.scriber.tellimer.io/files/avatar-example.png"
                  alt="Tom Cook"
                  width={40}
                  height={40}
                ></EmailImage>
              </EmailCol>
              <EmailCol>
                <EmailTable>
                  <EmailRow>
                    <EmailCol
                      className="creator-name"
                      style={{ lineHeight: '20px', color: '#111827' }}
                    >
                      Tom Cook
                    </EmailCol>
                  </EmailRow>
                  <EmailRow>
                    <EmailCol style={{ lineHeight: '20px', color: '#374151' }}>
                      A day - 2 Min read
                    </EmailCol>
                  </EmailRow>
                </EmailTable>
              </EmailCol>
            </EmailRow>
          </EmailTable>
        </EmailSection>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{
            __html: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate blanditiis neque consequatur repudiandae </p><blockquote><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate bland</p></blockquote><p>perferendis pariatur nihil! Eveniet quas nulla quam laboriosam veritatis unde consectetur illo autem repudiandae dolorum.</p><ul><li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate bland</p></li><li><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos quas rem ipsam vitae quia pariatur, hic neque</p></li><li><p>Eaque officia sit repellat delectus amet, numquam alias mollitia est iusto. Nisi?</p></li></ul><h2>This is a heading</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate blanditiis neque <a target="_blank" rel="noopener noreferrer nofollow" href="https://localhost.com/api/graphql">here is a link</a> consequatur repudiandae perferendis pariatur nihil! Eveniet quas nulla quam laboriosam veritatis unde consectetur illo autem repudiandae dolorum.</p><ol><li><p>ordered</p></li><li><p>list</p></li><li><p>here</p></li><li><p>another one</p></li></ol><h3>A subheading</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia cupiditate blanditiis neque consequatur repudiandae perferendis pariatur nihil! Eveniet quas nulla quam laboriosam veritatis unde consectetur illo autem repudiandae dolorum.</p><figure><img width=520 style="width: 520px" src="https://d1e23yf52y86uu.cloudfront.net/files/hkyk82q2s-1r.jpg" alt="" title="This is a building somewhere in the states"><figcaption>This is a building somewhere in the states</figcaption></figure><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur, libero quia nisi architecto provident consequatur quod, quasi aliquid officia animi recusandae ducimus? Vitae, sequi voluptatem. Expedita cum excepturi aut?</p>`
          }}
        ></div>
        <EmailSection padTop={24}>
          <EmailDesktopOnly>
            <EmailAutosizeButton
              title="View more articles"
              background={'#000000'}
              href="#"
            />
          </EmailDesktopOnly>
          <EmailMobileOnly>
            <EmailAutosizeButton
              title="View more articles"
              fontSize={22}
              background={'#000000'}
              href="#"
            />
          </EmailMobileOnly>
        </EmailSection>
      </>
    )
  }

  mobileCss() {
    return `

    .email-social-image {
      width: 32px !important;
      height: 32px !important;
    }
      .creator-image {
        width: 64px !important;
        height: 64px !important;
        margin-right: 16px !important;
      }

      .creator-name {
        line-height: 34px !important;
      }

      h2 {
        font-size: 28px !important;
      }

      h3 {
        font-size: 24px !important;
      }

      .image-caption {
        font-size: 20px !important;
      }

      .post-content > div,
      .post-content > p,
      .post-content > span,
      .post-content li {
        line-height: 32px !important;
      }

      .post-content > p,
      .image-figure,
      .email-quote {
        margin-bottom: 32px !important;
      }
    `
  }

  css() {
    return `
      body,
      p,
      li span,
      h2,
      h3,
      div {
        color: #111827;
      }

      body {
        background: #ffffff;
      }

      .text-4xl {
        color: #111827;
      }

      .text-lg {
        font-size: 20px;
        line-height: 28px;
      }

      .article-content {
        color: #6B7280;
        line-height: 26px;
      }
      .article-content p,
      .article-content li,
      .article-content div {
        line-height: 26px;
      }

      td p {
        line-height: 24px;
      }

      .email-quote {
        border-color: #0D9488;
      }

      a {
        color: #066B64;
        text-decoration: none;
      }
      a * {
        color: #066B64;
        text-decoration: none;
      }
      .post-content a {
        color: #111827;
        text-decoration: underline !important;
        font-weight: bold !important;
      }

      body {
        color: #111827;
      }

      .post-content > div,
      .post-content > p,
      .post-content > span,
      .post-content li {
        font-family: Helvetica, Roboto, Arial, Verdana, Tahoma, sans-serif;
        line-height: 28px;
      }

      .post-content > p,
      .image-figure,
      .email-quote {
        margin-bottom: 24px;
      }


      .creator-image {
        border-radius: 50%;
      }

      .post-title {
        font-family: Helvetica, Roboto, Arial, Verdana, Tahoma, sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
      }

      h2 {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 16px;
        letter-spacing: 0;
        margin-top: 48px;
      }

      h3 {
        font-size: 18px;
        line-height: 22px;
        margin-top: 32px;
        letter-spacing: 0;
        margin-bottom: 16px;
      }

      .image-caption {
        color: #6B7280;
        font-size: 14px;
        line-height: 1.4;
        letter-spacing: 0.02em;
      }
    `
  }
}
