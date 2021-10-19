import React, { Component } from 'react'

type Props = {
  src: string
  width: number
  height: number
  alt: string
}
export class EmailImage extends Component<Props> {
  render() {
    return <img {...this.props} />
  }
}
