import {ConfirmEmailMailable} from './mailable'
import {send} from '../../src'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API)

const mailable = new ConfirmEmailMailable('this-be-the-token')

send(mailable, {email: 'tim.feid@tellimer.com', name: 'Tim Feid'}).then(result => console.log(result))
