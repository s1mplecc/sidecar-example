const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

// add routes:
router.get('/health', async (ctx, next) => {
  ctx.response.body = {
    status: 'UP'
  }
})

router.get('/book/:id', async (ctx, next) => {
  ctx.response.body = {
    bookId: ctx.params.id,
    authorId: "1",
    description: "This is a book."
  }
})

// add router middleware:
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000...')
