import { expect } from 'chai'
import faker from 'faker'
import { send } from '../src/send'
import { TestMailable } from './test-mailable'

const createMailable = () => {
  const mailable = new TestMailable()

  const customArgs: Record<string, string> = {}
  customArgs[faker.lorem.word()] = faker.lorem.word()

  mailable.subject = faker.lorem.sentence()
  mailable.from = faker.internet.exampleEmail()
  mailable.categories = () => [faker.lorem.word()]
  mailable.customArgs = () => customArgs

  return mailable
}

describe('Integration::send', async () => {
  it('Sends to one email address', async () => {
    // given
    const email = `scriber-test-${faker.internet.exampleEmail()}`
    const mailable = createMailable()

    // when
    const response = await send(mailable, email)

    // then
    expect(!!response).eq(true)
  })
})
