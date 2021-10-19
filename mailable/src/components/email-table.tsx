import React, { Component } from 'react'

type Props = {
  width?: number
  className?: string
  right?: boolean
  style?: React.CSSProperties
}

export class EmailTable extends Component<Props> {
  render() {
    const width = this.props.width || '100%'
    return (
      <table
        style={{ ...this.props.style, borderSpacing: 0, minWidth: width }}
        cellSpacing={0}
        width={width}
        className={this.props.className}
      >
        {this.props.children}
      </table>
    )
  }
}
