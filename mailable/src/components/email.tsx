import React, { Component } from 'react'
import { EmailCol } from './email-col'
import { EmailRow } from './email-row'
import { EmailTable } from './email-table'

type Props = {
  header?: React.ReactElement
  footer?: React.ReactElement
  preheaderText?: string
}

export class Email extends Component<Props> {
  render() {
    return (
      <>
        <p className="email-preheader-text">{this.props.preheaderText}</p>
        <table className="email-container" role="presentation">
          {this.props.header && (
            <tr>
              <td align="center" className="pt-4">
                <table role="presentation" width={600} className="email-header">
                  <tr>
                    <td>{this.props.header}</td>
                  </tr>
                </table>
              </td>
            </tr>
          )}
          <tr>
            <td align="center">
              <EmailTable className="email-body" width={600}>
                <EmailRow>
                  <EmailCol className="email-content">{this.props.children}</EmailCol>
                </EmailRow>
              </EmailTable>
            </td>
          </tr>
          {this.props.footer && (
            <tr>
              <td align="center" className="pt-4">
                <table role="presentation" width={600} className="email-footer">
                  <tr>
                    <td>{this.props.footer}</td>
                  </tr>
                </table>
              </td>
            </tr>
          )}
        </table>
      </>
    )
  }
}
