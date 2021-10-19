import React, { Component } from 'react'

type Props = {
  style?: React.CSSProperties
  className?: string
}
export class EmailRow extends Component<Props> {
  render() {
    return (
      <tr className={this.props.className} style={this.props.style}>
        {this.props.children}
      </tr>
    )
  }
}
