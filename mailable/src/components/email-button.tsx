import React, { Component } from 'react'
import { Property } from 'csstype'

type Props = {
  href: string
  width?: number
  align?: 'center' | 'left' | 'right'
  background?: string
  color?: string
  yPadding?: number
  xPadding?: number
  fontSize?: number
  fontWeight?: Property.FontWeight
}
export class EmailButton extends Component<Props> {
  render() {
    const color = this.props.color || '#FFFFFF'
    const buttonStyles: React.CSSProperties = {
      padding: `${this.props.yPadding || 8}px ${this.props.xPadding || 12}px`,
      fontSize: this.props.fontSize || 14,
      textDecoration: 'none',
      fontWeight: this.props.fontWeight || 'bold',
      display: 'inline-block',
      color,
      background: this.props.background || '#ED2939',
    }

    return (
      <table width="600">
        <tr>
          <td align={this.props.align}>
            <table width={this.props.width || 300}>
              <tr>
                <td align={this.props.align} width={this.props.width || 300} style={buttonStyles}>
                  <a
                    className="link"
                    href={this.props.href}
                    target="_blank"
                    style={{ color, textDecoration: 'none' }}
                  >
                    {this.props.children}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    )
  }
}
