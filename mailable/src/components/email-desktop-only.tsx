import React, { Component } from 'react'

export class EmailDesktopOnly extends Component {
  render() {
    return <div className="email-desktop-only">{this.props.children}</div>
  }
}
