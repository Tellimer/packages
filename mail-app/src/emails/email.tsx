import React from "react";
import { Mailable, Components } from '@tellimer/mailable'
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
          <EmailCol>
            <EmailTable>
              <EmailRow>
                <EmailCol>
                  <EmailImage
                    src="https://cdn.tellimer.com/providers/email-tellimer-email-logo-11png.png"
                    width={128}
                    height={32}
                    alt="Tellimer" />
                </EmailCol>
                <EmailCol right valign="middle">
                  <EmailLink href="#" color="#999999" underline className="text-xs">View in your browser</EmailLink>
                </EmailCol>
              </EmailRow>
            </EmailTable>
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol>
            <EmailHr spacing={32} color="#e2e2e2" />
          </EmailCol>
        </EmailRow>
      </EmailTable>
    )

    const footer = (
      <EmailTable className="text-sm">
        <EmailRow>
          <EmailCol>
            <EmailHr height={2} />
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol center>
            <EmailSection center pad={32}>
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
            <EmailHr color="#ccc" />
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol center>
            <EmailSection center pad={32}>
              <EmailTable width={500}>
                <EmailRow>
                  <EmailCol center>
                    <EmailLink underline color="#777777" href="#">
                      Unsubscribe
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink underline color="#777777" href="#">
                      Change your preferences
                    </EmailLink>
                  </EmailCol>
                  <EmailCol center>
                    <EmailLink underline color="#777777" href="#">
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
            <p style={{color: '#777777'}}>
              Tellimer, 1 Long Lane, London SE1 4PG, United Kingdom
            </p>
            <p style={{color: '#777777'}}>
              Tellimer is a company incorporated in England with registered number OC371725. By receiving this e-mail and/or accessing the links provided herein you agree to be bound by the Tellimer Terms of Use. Tellimer is authorised and regulated by the Financial Conduct Authority
            </p>
          </EmailCol>
        </EmailRow>
      </EmailTable>
    )

    const children = await this.email()

    return (
      <Components.Email {...{header, footer}}>
        {children}
      </Components.Email>
    )
  }

  css () {
    return `
      body {
        background: #ffffff;
      }
    `
  }
}
