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
        <table className="email-container" role="presentation">
          {this.props.header && (
            <tr>
              <td align="center">
                <table role="presentation" width={width} className="email-header">
                  <tr>
                    <td>{this.props.header}</td>
                  </tr>
                </table>
              </td>
            </tr>
          )}
          <tr>
            <td align="center">
              <EmailTable className="email-body" width={width}>
                <EmailRow>
                  <EmailCol className="email-content">{this.props.children}</EmailCol>
                </EmailRow>
              </EmailTable>
            </td>
          </tr>
          {this.props.footer && (
            <tr>
              <td align="center">
                <table role="presentation" width={width} className="email-footer">
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
