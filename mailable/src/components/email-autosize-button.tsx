import React, { Component } from 'react'
import { Props as EmailButtonProps } from './email-button'
import { EmailButton, EmailDesktopOnly, EmailMobileOnly } from '.'
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
    const desktopFontSize = parseInt((this.props.fontSize || 16).toString(), 10)
    const desktopWidth =
      stringWidth(this.props.title, {
        size: desktopFontSize,
        font: fontFamily,
      }) +
      desktopFontSize * 2

    const mobileFontSize = 1.375 * desktopFontSize
    const mobileWidth =
      stringWidth(this.props.title, {
        size: mobileFontSize,
        font: fontFamily,
      }) +
      mobileFontSize * 2

    return (
      <>
        <EmailDesktopOnly>
          <EmailButton
            {...this.props}
            width={desktopWidth}
            fontSize={desktopFontSize}
            fontFamily={fontFamily}
          >
            {this.props.title}
          </EmailButton>
        </EmailDesktopOnly>
        <EmailMobileOnly>
          <EmailButton
            {...this.props}
            width={mobileWidth}
            fontSize={mobileFontSize}
            fontFamily={fontFamily}
          >
            {this.props.title}
          </EmailButton>
        </EmailMobileOnly>
      </>
    )
  }
}
