import React, { Component } from 'react'
import { EmailCol, EmailRow, EmailTable } from '.'

type Props = {
  spacing?: number
  color?: string
  height?: number
}
export class EmailHr extends Component<Props> {
  render() {
    const padding = this.props.spacing === undefined ? 8 : this.props.spacing

    return (
      <EmailTable>
        <EmailRow>
          <EmailCol style={{ height: padding, lineHeight: 0, fontSize: 0 }}>&nbsp;</EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol
            style={{
              height: this.props.height || 1,
              lineHeight: 0,
              fontSize: 0,
              background: this.props.color || '#000000',
            }}
          >
            &nbsp;
          </EmailCol>
        </EmailRow>
        <EmailRow>
          <EmailCol style={{ height: padding, lineHeight: 0, fontSize: 0 }}>&nbsp;</EmailCol>
        </EmailRow>
      </EmailTable>
    )
  }
}
