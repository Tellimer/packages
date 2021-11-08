import React, { Component } from 'react'

type Props = {
  src: string
  width?: number
  height?: number
  alt: string
  className?: string
}
export class EmailImage extends Component<Props> {
  render() {
    return <img className="email-image" {...this.props} />
  }
}
