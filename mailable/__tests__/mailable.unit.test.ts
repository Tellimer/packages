import { expect } from 'chai'
import { TestMailable, ScssTest, QuotesTest, LiTest } from './test.mailable'

describe('renders correctly', () => {
  it('renders correctly', async () => {
    const mail = new TestMailable()
    expect(await mail.render()).to.contain('this is an email, dood')
  })

  it('renders scss to inline css', async () => {
    const mail = new ScssTest()
    expect(await mail.render()).to.contain('padding-left: 4px')
  })

  it('converts quotes to email-safe quotes', async () => {
    const mail = new QuotesTest()
    expect(await mail.render()).to.contain('email-quote')
  })

  it('wraps li content in a span', async () => {
    const mail = new LiTest()
    expect(await mail.render()).to.contain('</span></li>')
  })
})
