import {AMailable} from './a-mailable'
import {send} from '../../src'
import sendgrid from '@sendgrid/mail'
import { MailableVersionFactory, Personalization } from '@tellimer/mailable'
import { BMailable } from './b-mailable'

sendgrid.setApiKey(process.env.SENDGRID_API)

class ExampleABVersionFactory extends MailableVersionFactory {
  version(personalization: Personalization) {
    return parseInt(personalization.customArgs?.userId, 10) % 2 === 0 ? new AMailable() : new BMailable()
  }
}

send(new ExampleABVersionFactory(), [
  {email: 'tim.feid@tellimer.com', name: 'Tim Feid', customArgs: { userId: '10' }},
  {email: 'tim.feid2@tellimer.com', name: 'Tim Feid', customArgs: { userId: '11' }},
]).then(result => console.log(result))
