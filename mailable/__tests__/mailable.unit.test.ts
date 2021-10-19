import {expect} from 'chai'
import { TestMailable, ScssTest } from './test.mailable'

describe('renders correctly', () => {
  it('renders correctly', async () => {
    const mail = new TestMailable()
    expect(await mail.render()).to.contain('this is an email, dood')
  })

  it('renders scss to inline css', async () => {
    const mail = new ScssTest()
    expect(await mail.render()).to.contain('padding-left: 4px')
  })
})
