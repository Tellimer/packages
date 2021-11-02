import React, { Component } from 'react'
import { EmailCol, EmailRow, EmailTable } from '.'

type Props = {
  spacingTop?: number
  spacingBottom?: number
  spacing?: number
  color?: string
  height?: number
}
export class EmailHr extends Component<Props> {
  render() {
    const defaultPadding = this.props.spacing === undefined ? 8 : this.props.spacing
    const paddingTop = this.props.spacingTop === undefined ? defaultPadding : this.props.spacingTop
    const paddingBottom =
      this.props.spacingBottom === undefined ? defaultPadding : this.props.spacingBottom

    return (
      <EmailTable>
        <EmailRow>
          <EmailCol style={{ height: paddingTop, lineHeight: 0, fontSize: 0 }}>&nbsp;</EmailCol>
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
          <EmailCol style={{ height: paddingBottom, lineHeight: 0, fontSize: 0 }}>&nbsp;</EmailCol>
        </EmailRow>
      </EmailTable>
    )
  }
}
