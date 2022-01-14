import cheerio, { CheerioAPI } from 'cheerio'
import { URL } from 'url'
import axios from 'axios'
import imageSize from 'image-size'

type Options = {
  maxImageWidth?: number
}

export class EmailBodyParser {
  constructor(private input: string) {}

  private dom: CheerioAPI

  public async parse(options: Options) {
    this.dom = cheerio.load(`${this.input}`, {})

    this.convertQuoteTags()
    this.convertLiTags()
    this.convertFigureTags()

    if (options.maxImageWidth) {
      await this.addImageSizes(options.maxImageWidth)
    }

    return this.dom.html()
  }

  private convertFigureTags() {
    const figures = this.dom('figure')
    for (const figure of figures) {
      this.dom(figure).addClass('image-figure')
      figure.tagName = 'div'
    }

    const figCaptions = this.dom('figcaption')
    for (const caption of figCaptions) {
      this.dom(caption).addClass('image-caption')
      caption.tagName = 'div'
    }
  }

  private convertQuoteTags() {
    const quotes = this.dom('blockquote')
    for (const quote of quotes) {
      const q = '<span>&quot;</span>'
      this.dom(quote).append(q).prepend(q).addClass('email-quote')
      const ps = this.dom(quote).find('p')
      for (const p of ps) {
        p.tagName = 'span'
      }
      quote.tagName = 'div'
    }
  }

  private convertLiTags() {
    const listItems = this.dom('li')
    for (const listItem of listItems) {
      this.dom(listItem).wrapInner('<span>')
    }
  }

  private async addImageSizes(maxWidth: number) {
    const imgs = this.dom('img:not(.do-not-resize)')
    for (const img of imgs) {
      const src = img.attribs.src
      const alt = img.attribs.alt || 'Image'
      img.attribs.alt = alt
      try {
        const url = new URL(src)
        const response = await axios.get(url.href || '', {
          responseType: 'arraybuffer',
        })

        const { width = maxWidth, height = 1 } = imageSize(response.data)
        const specifiedWidth = parseInt(img.attribs.width || '0', 10)
        const specifiedHeight = parseInt(img.attribs.height || '0', 10)
        img.attribs.style = ''
        if (specifiedWidth > maxWidth) {
          img.attribs.width = maxWidth.toString()
        }

        if (!img.attribs.width) {
          const newWidth = width > maxWidth ? maxWidth : width
          img.attribs.width = newWidth.toString()
          if (specifiedHeight) {
            const ratio = width / height
            img.attribs.width = Math.round(specifiedHeight * ratio).toString()
          }
        }

        this.dom(img).css({ width: `${img.attribs.width}px` })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
