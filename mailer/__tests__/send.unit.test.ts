import sendgrid from '@sendgrid/mail'
import { expect } from 'chai'
import faker from 'faker'
import sinon from 'ts-sinon'
import { mailerConfig } from '../src'
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

describe('Unit::send', async () => {
  let sendStub: sinon.SinonStub
  beforeEach(() => {
    sendStub = sinon.stub(sendgrid, 'send')
  })

  afterEach(() => {
    sendStub.restore()
  })

  it('Sends to one email address', async () => {
    const email = faker.internet.exampleEmail()
    const mailable = createMailable()

    await send(mailable, email)

    expect(sendStub.calledOnceWith(sinon.match({ personalizations: [{ to: email }] }))).to.eq(true)
  })

  it('Sends to multiple email address', async () => {
    const emails = [faker.internet.exampleEmail(), faker.internet.exampleEmail()]
    const mailable = createMailable()

    await send(mailable, emails)

    expect(
      sendStub.calledOnceWith(
        sinon.match({ personalizations: emails.map(email => ({ to: email })) }),
      ),
    ).to.eq(true)
  })

  it('Sends to one email address with a name', async () => {
    const mailable = createMailable()
    const person = {
      email: faker.internet.exampleEmail(),
      name: faker.name.findName(),
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: [
            {
              to: person,
            },
          ],
        }),
      ),
    ).to.eq(true)
  })

  it('Sends to one email address with a null name', async () => {
    const mailable = createMailable()
    const person = {
      email: faker.internet.exampleEmail(),
      name: null,
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: [
            {
              to: {
                email: person.email,
                name: '',
              },
            },
          ],
        }),
      ),
    ).to.eq(true)
  })

  it('Sends to one email address with a null name', async () => {
    const mailable = createMailable()
    const person = {
      email: faker.internet.exampleEmail(),
      name: null,
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: [
            {
              to: {
                email: person.email,
                name: '',
              },
            },
          ],
        }),
      ),
    ).to.eq(true)
  })

  it('Sends email with null from name', async () => {
    const mailable = createMailable()
    // @ts-ignore
    mailable.from = {
      email: 'testarino@something.com',
      name: null,
    }
    const person = {
      email: faker.internet.exampleEmail(),
      name: faker.name.firstName(),
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: [
            {
              to: person,
            },
          ],
          from: {
            name: '',
            // @ts-ignore
            email: mailable.from.email,
          },
        }),
      ),
    ).to.eq(true)
  })

  it('Sends to multiple email addresses with a null names', async () => {
    const mailable = createMailable()
    const persons = [
      {
        email: faker.internet.exampleEmail(),
        name: null,
      },
      {
        email: faker.internet.exampleEmail(),
        name: null,
      },
    ]

    await send(mailable, persons)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: [
            {
              to: {
                email: persons[0].email,
                name: '',
              },
            },
            {
              to: {
                email: persons[1].email,
                name: '',
              },
            },
          ],
        }),
      ),
    ).to.eq(true)
  })

  it('Sends to one email address with a name and substitutions', async () => {
    const mailable = createMailable()
    const person = {
      email: faker.internet.exampleEmail(),
      name: faker.name.findName(),
      substitutions: {
        ':hello': 'world',
      },
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: [
            {
              to: {
                email: person.email,
                name: person.name,
              },
              substitutions: {
                ':hello': 'world',
              },
            },
          ],
        }),
      ),
    ).to.eq(true)
  })

  it('Sends to multiple email address with a name', async () => {
    const mailable = createMailable()
    const people = [
      {
        email: faker.internet.exampleEmail(),
        name: faker.name.findName(),
      },
      {
        email: faker.internet.exampleEmail(),
        name: faker.name.findName(),
      },
    ]

    await send(mailable, people)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          personalizations: people.map(to => ({ to })),
        }),
      ),
    ).to.eq(true)
  })

  it('Sends to 100,000 people', async () => {
    const mailable = createMailable()
    const people: { name: string; email: string }[] = []

    for (let i = 0; i < 100000; i++) {
      people.push({
        email: faker.internet.exampleEmail(),
        name: faker.name.findName(),
      })
    }

    await send(mailable, people)
    expect(sendStub.callCount).to.eq(100)
  })

  it('Adds custom args from the global config', async () => {
    mailerConfig.customArgs = {
      test: 'arino',
    }

    const mailable = createMailable()
    const person = {
      email: faker.internet.exampleEmail(),
      name: faker.name.findName(),
      substitutions: {
        ':hello': 'world',
      },
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          customArgs: mailable.customArgs(),
          personalizations: [
            {
              to: {
                email: person.email,
                name: person.name,
              },
              substitutions: {
                ':hello': 'world',
              },
              customArgs: {
                test: 'arino',
              },
            },
          ],
        }),
      ),
    ).to.eq(true)
  })

  it('Adds custom args from the global config AND personalization', async () => {
    mailerConfig.customArgs = {
      test: 'arino',
    }

    const mailable = createMailable()
    const person = {
      email: faker.internet.exampleEmail(),
      name: faker.name.findName(),
      substitutions: {
        ':hello': 'world',
      },
      customArgs: {
        userId: '100',
      },
    }

    await send(mailable, person)

    expect(
      sendStub.calledOnceWith(
        sinon.match({
          customArgs: mailable.customArgs(),
          personalizations: [
            {
              to: {
                email: person.email,
                name: person.name,
              },
              substitutions: {
                ':hello': 'world',
              },
              customArgs: {
                test: 'arino',
                userId: '100',
              },
            },
          ],
        }),
      ),
    ).to.eq(true)
  })
})
