import Koa from 'koa'
import Router from 'koa-router'
import { ActivationMailable } from './emails/activation.mailable'
import { WelcomeMailable } from './emails/welcome.mailable'

const app = new Koa()
const router = new Router()

router.get('/activation', async ctx => {
  const mailable = new ActivationMailable()
  ctx.body = await mailable.render()
})

router.get('/welcome', async ctx => {
  const mailable = new WelcomeMailable()
  ctx.body = await mailable.render()
})

app.use(router.routes())

export { app }
