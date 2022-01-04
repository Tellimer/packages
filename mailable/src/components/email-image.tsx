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
    const style: React.CSSProperties = {}

    if (this.props.height) {
      style.height = `${this.props.height}px`
      if (!this.props.width) {
        style.width = 'auto'
      }
    }

    if (this.props.width) {
      style.width = `${this.props.width}px`
      if (!this.props.height) {
        style.height = 'auto'
      }
    }

    const props = {
      src: this.props.src,
      width: this.props.width,
      height: this.props.height,
      alt: this.props.alt,
      className: this.props.className,
      style,
    }

    props.className = this.props.className || ''
    props.className += ' email-image'
    if (this.props.noResize) {
      props.className += ' do-not-resize'
    }

    return <img {...props} />
  }
}
