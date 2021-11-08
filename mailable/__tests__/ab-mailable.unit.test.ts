import { expect } from 'chai'
import { Personalization } from '../src/personalization'
import { Versioned } from './abtest.mailable'

describe('Unit::ab mailable', () => {
  it('gets the correct mailable based on personalization', async () => {
    const personalizationForA: Personalization = {
      to: 'test@test.com',
      customArgs: {
        userId: '10',
      },
    }

    const personalizationForB: Personalization = {
      to: 'test2@test.com',
      customArgs: {
        userId: '11',
      },
    }

    const factory = new Versioned()
    const mailableForA = factory.version(personalizationForA)
    const mailableForB = factory.version(personalizationForB)

    expect(mailableForA.subject).contain('for A')
    expect(mailableForB.subject).contain('for B')
  })
})
