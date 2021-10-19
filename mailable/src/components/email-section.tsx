import React, { Component } from 'react'
import { EmailCol, EmailRow, EmailTable } from '.'
import { ColProps } from './email-col'

type EmailSectionProps = ColProps & {
  padBottom?: number
  padTop?: number
  pad?: number
}

export class EmailSection extends Component<EmailSectionProps> {
  render() {
    const topPadding = this.props.padTop || this.props.pad
    const bottomPadding = this.props.padBottom || this.props.pad

    return (
      <EmailTable>
        {topPadding && (
          <EmailRow>
            <EmailCol style={{ height: topPadding }} />
          </EmailRow>
        )}
        <EmailRow>
          <EmailCol {...this.props}>{this.props.children}</EmailCol>
        </EmailRow>
        {bottomPadding && (
          <EmailRow>
            <EmailCol style={{ height: bottomPadding }} />
          </EmailRow>
        )}
      </EmailTable>
    )
  }
}
