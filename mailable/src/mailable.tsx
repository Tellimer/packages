/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import dom from 'react-dom/server'
import juice from 'juice'

import path from 'path'
import fs from 'fs'

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

  async render() {
    const email = dom.renderToString(await this.view())
    const html = fs
      .readFileSync(path.join(__dirname, './email.html'))
      .toString()
      .replace('<div id="email"></div>', email)
      .replace('<title></title>', `<title>${this.subject}</title>`)

    return juice(html, {
      applyAttributesTableElements: false,
      removeStyleTags: false,
      extraCss: [
        // sass.renderSync({
        //   file: path.join(__dirname, './styles/main.scss'),
        // }).css,
        // fs.readFileSync('./styles/main.css'),
        await this.css(),
      ].join('\n'),
    })
  }
}
