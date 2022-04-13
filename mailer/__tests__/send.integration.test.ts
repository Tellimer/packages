import { expect } from 'chai'
import faker from 'faker'
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
  let send
  beforeEach(function () {
    delete require.cache[require.resolve('../src/send')]
    process.env.SENDGRID_BATCH_SIZE = '2'
    send = require('../src/send').send
  })

  it('Sends to one email address', async () => {
    // given
    const email = `scriber-test-${faker.internet.exampleEmail()}`
    const mailable = createMailable()

    // when
    let error
    try {
      await send(mailable, email)
    } catch (err) {
      error = err
    }

    // then
    expect(!!error).eq(true)
    expect(error.code).eq(401)
  })

  it('Sends to multiple email address', async () => {
    // given
    const emails = [...Array(20)].map((_, idx) => `${idx}-scriber-test-${faker.internet.exampleEmail()}`)
    const mailable = createMailable()

    // when
    let error
    try {
      await send(mailable, emails)
    } catch (err) {
      error = err
    }
    console.log(error)

    // then
    expect(!!error).eq(true)
    expect(error.code).eq(401)
  })
})
