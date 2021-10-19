import React, { Component } from 'react'

export type ColProps = {
  right?: boolean
  className?: string
  colSpan?: number
  width?: number
  valign?: 'top' | 'middle' | 'baseline' | 'bottom'
  center?: boolean
  style?: React.CSSProperties
}
export class EmailCol extends Component<ColProps> {
  render() {
    return (
      <td
        style={this.props.style}
        width={this.props.width || 'auto'}
        valign={this.props.valign || 'top'}
        align={this.props.center ? 'center' : this.props.right ? 'right' : 'left'}
        colSpan={this.props.colSpan || 1}
        className={this.props.className}
      >
        {this.props.children}
      </td>
    )
  }
}
