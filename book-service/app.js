const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

// add routes:
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>'
})

router.get('/json', async (ctx, next) => {
  ctx.response.body = {
    statement: 'ssss'
  }
})

// add router middleware:
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000...')
