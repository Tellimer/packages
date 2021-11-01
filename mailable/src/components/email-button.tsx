import React, { Component } from 'react'
import { Property } from 'csstype'
import dom from 'react-dom/server'

export type Props = {
  href: string
  width?: number
  align?: 'center' | 'left' | 'right'
  background?: string
  color?: string
  yPadding?: number
  xPadding?: number
  height?: number
  borderRadius?: number
  fontSize?: number
  fontWeight?: Property.FontWeight
  fontFamily?: Property.FontFamily
}

function convertPropsToStyles(props: Props): React.CSSProperties {
  const color = props.color || '#FFFFFF'
  const height = 42
  return {
    fontSize: props.fontSize || 16,
    textDecoration: 'none !important',
    fontWeight: props.fontWeight || 'normal',
    fontFamily: props.fontFamily,
    lineHeight: `${height}px`,
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: props.borderRadius || 5,
    color,
    backgroundColor: props.background || '#ED2939',
    width: `${props.width}px`,
    textSizeAdjust: 'none',
    letterSpacing: 0,
  }
}

class Button extends Component<Props> {
  render() {
    const buttonStyles = convertPropsToStyles(this.props)

    return (
      <a href={this.props.href} className="font" style={buttonStyles}>
        {this.props.children}
      </a>
    )
  }
}

export class EmailButton extends Component<Props> {
  render() {
    const buttonStyles = convertPropsToStyles(this.props)
    const button = <Button {...this.props} />

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${
              this.props.href
            }" style="height:${buttonStyles.lineHeight};v-text-anchor:middle;width:${
            buttonStyles.width
          };" arcsize="10%" stroke="f" fillcolor="${buttonStyles.backgroundColor}">
              <w:anchorlock/>
              <center>
                ${dom.renderToString(button)}
              </center>
            </v:roundrect>
          `,
        }}
      />
    )
  }
}
