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

    if (options.maxImageWidth) {
      await this.addImageSizes(options.maxImageWidth)
    }

    return this.dom.html()
  }

  private async addImageSizes(maxWidth: number) {
    const imgs = this.dom('img.email-image')
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
        if (!(img.attribs.classes || '').includes('do-no-resize')) {
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
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
