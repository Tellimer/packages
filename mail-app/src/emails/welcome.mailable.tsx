import React from 'react'
import { Components } from '../../../mailable/dist/index'
import { Email } from './email'

const { EmailRow, EmailCol, EmailTable, EmailImage, EmailLink, EmailHr, EmailSection, EmailAutosizeButton } = Components

export class WelcomeMailable extends Email {
  subject = 'test'

  email() {
    return (
      <>
        <EmailSection center padBottom={24} className="text-4xl">
          Thanks for subscribing to
          <br /> A publication name!
        </EmailSection>
        <EmailSection center padBottom={16}>
              <p>
                You&apos;re now one of the many smart readers who receive timely insights from{' '}
                A publication name via Scriber.
              </p>
              <p>
                A publication name&apos;s next newsletter will be hitting your inbox soon. In
                the meantime, visit their publication page to browse all previous posts.
              </p>
              <p>You can also view their latest posts below.</p>
        </EmailSection>

        <EmailSection center padBottom={24} className="text-3xl">
          Thanks for subscribing to
          <br /> A publication name!
        </EmailSection>
        <EmailSection center padBottom={16}>
              <p>
                You&apos;re now one of the many smart readers who receive timely insights from{' '}
                A publication name via Scriber.
              </p>
              <p>
                A publication name&apos;s next newsletter will be hitting your inbox soon. In
                the meantime, visit their publication page to browse all previous posts.
              </p>
              <p>You can also view their latest posts below.</p>
        </EmailSection>

        <EmailSection center padBottom={24} className="text-2xl">
          Thanks for subscribing to
          <br /> A publication name!
        </EmailSection>
        <EmailSection center padBottom={16}>
              <p>
                You&apos;re now one of the many smart readers who receive timely insights from{' '}
                A publication name via Scriber.
              </p>
              <p>
                A publication name&apos;s next newsletter will be hitting your inbox soon. In
                the meantime, visit their publication page to browse all previous posts.
              </p>
              <p>You can also view their latest posts below.</p>
        </EmailSection>

        <EmailSection center padBottom={24} className="text-xl">
          Thanks for subscribing to
          <br /> A publication name!
        </EmailSection>
        <EmailSection center padBottom={16}>
              <p>
                You&apos;re now one of the many smart readers who receive timely insights from{' '}
                A publication name via Scriber.
              </p>
              <p>
                A publication name&apos;s next newsletter will be hitting your inbox soon. In
                the meantime, visit their publication page to browse all previous posts.
              </p>
              <p>You can also view their latest posts below.</p>
        </EmailSection>

        <EmailSection center padBottom={24} className="text-lg">
          Thanks for subscribing to
          <br /> A publication name!
        </EmailSection>
        <EmailSection center padBottom={16}>
              <p>
                You&apos;re now one of the many smart readers who receive timely insights from{' '}
                A publication name via Scriber.
              </p>
              <p>
                A publication name&apos;s next newsletter will be hitting your inbox soon. In
                the meantime, visit their publication page to browse all previous posts.
              </p>
              <p>You can also view their latest posts below.</p>
        </EmailSection>

        <EmailSection center padBottom={24} className="text-sm">
          Thanks for subscribing to
          <br /> A publication name!
        </EmailSection>
        <EmailSection center padBottom={16}>
              <p>
                You&apos;re now one of the many smart readers who receive timely insights from{' '}
                A publication name via Scriber.
              </p>
              <p>
                A publication name&apos;s next newsletter will be hitting your inbox soon. In
                the meantime, visit their publication page to browse all previous posts.
              </p>
              <p>You can also view their latest posts below.</p>
        </EmailSection>
        <EmailSection center pad={16}>
          <EmailAutosizeButton
            align="center"
            title={`Visit A publication name`}
            background="#00FF00"
            href="#"
          />
        </EmailSection>
      </>
    )
  }

  // mobileCss() {
  //   return `

  //   .email-social-image {
  //     width: 32px !important;
  //     height: 32px !important;
  //   }
  //     .creator-image {
  //       width: 64px !important;
  //       height: 64px !important;
  //       margin-right: 16px !important;
  //     }

  //     .creator-name {
  //       line-height: 34px !important;
  //     }

  //     h2 {
  //       font-size: 28px !important;
  //     }

  //     h3 {
  //       font-size: 24px !important;
  //     }

  //     .image-caption {
  //       font-size: 20px !important;
  //     }

  //     .post-content > div,
  //     .post-content > p,
  //     .post-content > span,
  //     .post-content li {
  //       line-height: 32px !important;
  //     }

  //     .post-content > p,
  //     .image-figure,
  //     .email-quote {
  //       margin-bottom: 32px !important;
  //     }
  //   `
  // }

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
        line-height: 40px;
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
    `
  }
}
