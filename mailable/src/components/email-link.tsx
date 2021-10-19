import React, { Component } from 'react'

type Props = {
  href: string
  color?: string
  underline?: boolean
  className?: string
}
export class EmailLink extends Component<Props> {
  render() {
    const style: React.CSSProperties = {}

    if (!this.props.underline) {
      style.textDecoration = 'none'
    } else {
      style.textDecoration = 'underline'
    }

    if (this.props.color) {
      style.color = this.props.color
    }

    return (
      <a className={this.props.className} href={this.props.href} style={style}>
        <span className={this.props.className} style={style}>
          {this.props.children}
        </span>
      </a>
    )
  }
}
