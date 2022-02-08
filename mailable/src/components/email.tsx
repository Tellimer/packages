import React, { Component } from 'react'
import { EmailCol } from './email-col'
import { EmailRow } from './email-row'
import { EmailTable } from './email-table'

type Props = {
  header?: React.ReactElement
  footer?: React.ReactElement
  width?: number
  preheaderText?: string
}

export class Email extends Component<Props> {
  render() {
    const width = this.props.width || 600
    return (
      <>
        <p className="email-preheader-text">{this.props.preheaderText}</p>
        <EmailTable className="email-container" width={width}>
          {this.props.header && (
            <EmailRow>
              <EmailCol center>
                <table role="presentation" width={width - 32} className="email-header">
                  <EmailRow>
                    <EmailCol>{this.props.header}</EmailCol>
                  </EmailRow>
                </table>
              </EmailCol>
            </EmailRow>
          )}
          <EmailRow>
            <EmailCol center>
              <EmailTable className="email-body" width={width - 32}>
                <EmailRow>
                  <EmailCol className="email-content">{this.props.children}</EmailCol>
                </EmailRow>
              </EmailTable>
            </EmailCol>
          </EmailRow>
          {this.props.footer && (
            <EmailRow>
              <EmailCol center>
                <table role="presentation" width={width - 32} className="email-footer">
                  <EmailRow>
                    <EmailCol>{this.props.footer}</EmailCol>
                  </EmailRow>
                </table>
              </EmailCol>
            </EmailRow>
          )}
        </EmailTable>
      </>
    )
  }
}
