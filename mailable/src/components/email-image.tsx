import React, { Component } from 'react'

type Props = {
  src: string
  width?: number
  height?: number
  alt: string
  className?: string
  noResize?: boolean
}
export class EmailImage extends Component<Props> {
  render() {
    const props = {
      src: this.props.src,
      width: this.props.width,
      height: this.props.height,
      alt: this.props.alt,
      className: this.props.className,
    }

    props.className = this.props.className || ''
    props.className += ' email-image'
    if (this.props.noResize) {
      props.className += ' do-not-resize'
    }

    return <img {...props} />
  }
}
