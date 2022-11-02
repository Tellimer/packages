import sendgrid from '@sendgrid/mail'
import {
  MailableVersionFactory,
  Personalization as SendgridPersonalization,
} from '@tellimer/mailable'
import sinon from 'ts-sinon'
import { send, Personalization } from '../src/send'
import { VersionAMailable, VersionBMailable } from './test-mailable-versions'
import faker from 'faker'
import { expect } from 'chai'

class Versioned extends MailableVersionFactory {
  version(personalization: SendgridPersonalization) {
    return parseInt(personalization.customArgs?.userId, 10) % 2 === 0
      ? new VersionAMailable()
      : new VersionBMailable()
  }
}

describe('Unit::ab-send', () => {
  let sendStub: sinon.SinonStub
  beforeEach(() => {
    sendStub = sinon.stub(sendgrid, 'send')
  })

  afterEach(() => {
    sendStub.restore()
  })

  it('Sends A/B test to correct people', async () => {
    const v = new Versioned()
    const people: Personalization[] = [
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        customArgs: {
          userId: '10',
        },
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        customArgs: {
          userId: '11',
        },
      },
    ]

    const response = await send(v, people)

    expect(
      sendStub.calledWith(
        sinon.match({
          personalizations: [
            {
              to: {
                email: people[0].email,
                name: people[0].name,
              },
              customArgs: { ...people[0].customArgs, version: 'A' },
            },
          ],
          subject: 'test for A',
        }),
      ),
    ).eq(true)

    expect(
      sendStub.calledWith(
        sinon.match({
          personalizations: [
            {
              to: {
                email: people[1].email,
                name: people[1].name,
              },
              customArgs: { ...people[1].customArgs, version: 'B' },
            },
          ],
          subject: 'test for B',
        }),
      ),
    ).eq(true)

    expect(response.personalizations).to.have.lengthOf(2)
    expect(response.versions.A).to.have.lengthOf(1)
    expect(response.versions.A[0].customArgs.version).to.eq('A')
    expect(response.versions.B).to.have.lengthOf(1)
    expect(response.versions.B[0].customArgs.version).to.eq('B')
    expect(response.html.A).to.contain('A!')
    expect(response.html.B).to.contain('B!')
  })
})
