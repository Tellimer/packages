import { expect } from 'chai'
import {
  TestMailable,
  ScssTest,
  TestMaxWidthImage,
  TestMaxWidthUnderSizeImage,
  TestMaxWidthNoResizeImage,
  TestMaxWidthWithAWidth,
  TestMaxWidthWithAHeight,
} from '../test.mailable'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import fs from 'fs'

describe('Unit::components/image', () => {
  let mock: MockAdapter
  before(() => {
    mock = new MockAdapter(axios)

    mock
      .onGet('https://test.com/large.png')
      .reply(200, fs.readFileSync(__dirname + '/../large.png'))

    mock
      .onGet('https://test.com/small.png')
      .reply(200, fs.readFileSync(__dirname + '/../small.png'))
  })

  it('image width is max width when image size is too large', async () => {
    const mail = new TestMaxWidthImage()
    expect(await mail.render()).to.contain('width="520"')
  })

  it('image width is good when image size is smaller than 520', async () => {
    const mail = new TestMaxWidthUnderSizeImage()
    expect(await mail.render()).to.contain('width="300"')
  })

  it('image width does not change if specified width is less than 520', async () => {
    const mail = new TestMaxWidthWithAWidth()
    const rendered = await mail.render()
    expect(rendered).to.not.contain('width="520"')
    expect(rendered).to.contain('width="200"')
  })

  it('fill width when only height is specified', async () => {
    const mail = new TestMaxWidthWithAHeight()
    const rendered = await mail.render()
    expect(rendered).to.contain('width="86"')
  })

  it('image does not resize when class "do-not-resize" is on the image', async () => {
    const mail = new TestMaxWidthNoResizeImage()
    expect(await mail.render()).to.contain(
      '<img class="do-not-resize" src="https://test.com/large.png" alt>',
    )
  })
})
