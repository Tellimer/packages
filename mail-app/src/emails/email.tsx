import React from "react";
import { Mailable, Components } from '../../../mailable/dist'
const { EmailRow, EmailCol, EmailTable, EmailImage, EmailLink, EmailHr, EmailSection, EmailButton } = Components

export abstract class Email extends Mailable {
  abstract email(): Promise<JSX.Element> | JSX.Element

  from = {
    name: 'Tellimer Support',
    email: 'support@tellimer.com',
  }

  async view () {
    const header = (
      <EmailTable>
        <EmailRow>
          <EmailCol center>
            <EmailLink href="#" color="#9CA3AF" underline className="text-xs">View in your browser</EmailLink>
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol>
            <EmailSection center pad={49}>
              <EmailImage
                src="https://d43kqocsoisii.cloudfront.net/files/9kvi6fhyj-email-logo-3x.png"
                width={143}
                height={32}
                alt="Tellimer" />
            </EmailSection>
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol>
            <EmailHr spacingBottom={50} spacingTop={0} color="#E5E7EB" />
          </EmailCol>
        </EmailRow>
      </EmailTable>
    )

    const footer = (
      <EmailTable className="text-sm">
        <EmailRow>
          <EmailCol>
            <EmailHr height={1} color="#E5E7EB" spacing={0} />
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol center>
            <EmailSection center pad={24}>
              <EmailTable width={300}>
                <EmailRow>
                  <EmailCol center>
                    <EmailLink href="https://linkedin.com">
                      <EmailImage src="https://cdn.tellimer.com/logos/logo-linkedin-black%403x.png" width={24} height={24} alt="linkedIn" />
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink href="https://linkedin.com">
                      <EmailImage src="https://cdn.tellimer.com/logos/logo-linkedin-black%403x.png" width={24} height={24} alt="linkedIn" />
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink href="https://linkedin.com">
                      <EmailImage src="https://cdn.tellimer.com/logos/logo-linkedin-black%403x.png" width={24} height={24} alt="linkedIn" />
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink href="https://linkedin.com">
                      <EmailImage src="https://cdn.tellimer.com/logos/logo-linkedin-black%403x.png" width={24} height={24} alt="linkedIn" />
                    </EmailLink>
                  </EmailCol>
                </EmailRow>
              </EmailTable>
            </EmailSection>
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol>
            <EmailHr color="#E5E7EB" spacing={0} />
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol center>
            <EmailSection center pad={32}>
              <EmailTable width={500}>
                <EmailRow>
                  <EmailCol center>
                    <EmailLink underline color="#9CA3AF" href="#">
                      Unsubscribe
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink underline color="#9CA3AF" href="#">
                      Change your preferences
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink underline color="#9CA3AF" href="#">
                      Get support
                    </EmailLink>
                  </EmailCol>
                </EmailRow>
              </EmailTable>
            </EmailSection>
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol center className="text-xs">
            <p style={{color: '#9CA3AF'}}>
              Tellimer, 1 Long Lane, London SE1 4PG, United Kingdom
            </p>
            <p style={{color: '#9CA3AF'}}>
              Tellimer is a company incorporated in England with registered number OC371725. By receiving this e-mail and/or accessing the links provided herein you agree to be bound by the Tellimer Terms of Use. Tellimer is authorised and regulated by the Financial Conduct Authority
            </p>
          </EmailCol>
        </EmailRow>
      </EmailTable>
    )

    const children = await this.email()

    return (
      <Components.Email {...{header, footer}} width={552}>
        {children}
      </Components.Email>
    )
  }

  css () {
    return `
      body {
        background: #ffffff;
        color: #374151;
      }

      li span {
        color: #374151;
      }

      .text-4xl {
        color: #111827;
      }
    `
  }

  mobileCss() {
    return `
      h2 {
        font-size: 26px !important;
      }

      h3 {
        font-size: 24px !important;
      }
    `
  }
}
