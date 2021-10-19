import {MassEmailMailable} from './mailable'
import {send} from '../../src'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API)

const mailable = new MassEmailMailable()

send(mailable, [
  {email: 'tim.feid@tellimer.com', name: 'Tim Feid', substitutions: {':first_name': 'Tim', ':phone_number': 'xxx-xxx-xx35'}},
  {email: 'tim.feid2@tellimer.com', name: 'Joe Shmoe', substitutions: {':first_name': 'Joe', ':phone_number': 'xxx-xxx-xx75'}},
]).then(result => console.log(result.responses.default[0]))
