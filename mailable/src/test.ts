import { ExampleMailable } from './example'

const e = new ExampleMailable('testarino')

e.render().then(val => {
  console.log(val)
})
