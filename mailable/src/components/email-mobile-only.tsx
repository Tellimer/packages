import React, { Component } from 'react'

export class EmailMobileOnly extends Component {
  render() {
    return <div className="email-mobile-only">{this.props.children}</div>
  }
}
