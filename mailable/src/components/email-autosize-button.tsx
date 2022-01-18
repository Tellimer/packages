import React, { Component } from 'react'
import { Props as EmailButtonProps } from './email-button'
import { EmailButton } from '.'
import stringWidth from 'string-pixel-width'

export type AvailableFont =
  | 'Andale Mono'
  | 'Arial'
  | 'Avenir'
  | 'Avenir Next'
  | 'Comic Sans MS'
  | 'Courier New'
  | 'Georgia'
  | 'Helvetica'
  | 'Impact'
  | 'Times New Roman'
  | 'Trebuchet MS'
  | 'Verdana'
  | 'Webdings'
  | 'Open Sans'
  | 'Tahoma'

export type Props = Omit<EmailButtonProps, 'width'> & {
  title: string
  fontFamily?: AvailableFont
}

export class EmailAutosizeButton extends Component<Props> {
  render() {
    const fontFamily = this.props.fontFamily || 'Helvetica'
    const fontSize = parseInt((this.props.fontSize || 16).toString(), 10)
    const width =
      stringWidth(this.props.title, {
        size: fontSize,
        font: fontFamily,
      }) +
      fontSize * 2

    return (
      <EmailButton {...this.props} width={width} fontSize={fontSize} fontFamily={fontFamily}>
        {this.props.title}
      </EmailButton>
    )
  }
}
