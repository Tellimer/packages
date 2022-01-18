import React, { Component } from 'react'
import { Property } from 'csstype'
import dom from 'react-dom/server'
import { EmailCol, EmailRow, EmailSection, EmailTable } from '.'

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
  style?: 'outline' | 'background'
}

function convertPropsToStyles(props: Props): React.CSSProperties {
  const color = props.color || '#FFFFFF'
  const fontSize = props.fontSize || 16
  const height = (props.height || Math.ceil(fontSize * 2.625)) + (props.yPadding || 0) * 2
  const width = props.width + (props.xPadding || 0) * 2

  return {
    fontSize: `${fontSize}px`,
    textDecoration: 'none !important',
    fontWeight: props.fontWeight || 'normal',
    fontFamily: props.fontFamily,
    lineHeight: `${height}px`,
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: props.borderRadius || 5,
    color,
    backgroundColor: props.background || '#ED2939',
    width: `${width}px`,
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

    if (this.props.style === 'outline') {
      return (
        <EmailTable>
          <EmailRow>
            <EmailCol center={this.props.align === 'center'} right={this.props.align === 'right'}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${this.props.href}" style="height:${buttonStyles.lineHeight};v-text-anchor:middle;width:${buttonStyles.width};" arcsize="12%" strokecolor="${buttonStyles.backgroundColor}" fillcolor="#ffffff">
      <w:anchorlock/>
      <center style="color:${buttonStyles.color};font-size:${buttonStyles.fontSize};wat;font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;">
      ${this.props.children}</center>
      </v:roundrect>
      <![endif]--><a href="${this.props.href}"
      style="background-color:#ffffff;border:1px solid ${buttonStyles.backgroundColor};border-radius:4px;color:${buttonStyles.color};display:inline-block;font-size:${buttonStyles.fontSize};wat;line-height:${buttonStyles.lineHeight};text-align:center;text-decoration:none;width:${buttonStyles.width};-webkit-text-size-adjust:none;mso-hide:all;">
      ${this.props.children}</a>`,
                }}
              ></div>
            </EmailCol>
          </EmailRow>
        </EmailTable>
      )
    }

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
