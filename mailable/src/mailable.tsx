import React from 'react'
import dom from 'react-dom/server'
import juice from 'juice'
import { EmailBodyParser } from './email-body-parser'
import emailHtml from './email.html'
import css from './styles/main.css'

export interface AttachmentJSON {
  content: string
  filename: string
  type?: string
  disposition?: string
  contentId?: string
}

export type Person =
  | string
  | {
      email: string
      name?: string
    }

export abstract class Mailable {
  abstract view():
    | Promise<React.ReactElement<any, string | React.JSXElementConstructor<any>>>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>

  abstract subject: string

  abstract from: Person

  replyTo = ''

  maxImageWidth: number

  categories(): string[] {
    return []
  }

  customArgs(): Record<string, string> {
    return {}
  }

  async attachments(): Promise<AttachmentJSON[]> {
    return []
  }

  css(): Promise<string> | string {
    return ''
  }

  mobileCss(): Promise<string> | string {
    return ''
  }

  defaultCss() {
    return css
  }

  async render() {
    const email = dom.renderToString(await this.view())
    const rawHtml = emailHtml
      .replace('<div id="email"></div>', email)
      .replace('<title></title>', `<title>${this.subject}</title>`)
      .replace(
        '<mobile-css></mobile-css>',
        `<style type="text/css">@media only screen and (max-width: 600px) {${await this.mobileCss()}}</style>`,
      )

    const parser = new EmailBodyParser(rawHtml)
    const html = await parser.parse({
      maxImageWidth: this.maxImageWidth,
    })

    return juice(html, {
      applyAttributesTableElements: false,
      removeStyleTags: false,
      preserveImportant: true,
      extraCss: [this.defaultCss(), await this.css()].join('\n'),
    })
      .split('text-decoration: none !important;')
      .join('text-decoration: none !important;text-decoration: none;text-underline: none;')
  }
}
