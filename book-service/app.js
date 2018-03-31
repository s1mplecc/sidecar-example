const Koa = require('koa')
const router = require('koa-router')()
const axios = require('axios')

const app = new Koa()

const SIDECAR_URI = 'http://localhost:9091'
const AUTHOR_SERVICE = 'author-service'

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

router.get('/book/:bookId', async (ctx, next) => {
  ctx.response.body = {
    bookId: ctx.params.bookId,
    authorId: '1',
    description: 'This is a book.'
  }
})

router.get('/book/:bookId/detailed', async (ctx, next) => {
  await axios.get(`${SIDECAR_URI}/${AUTHOR_SERVICE}/author/1`).then(res => {
    ctx.response.body = {
      bookId: ctx.params.bookId,
      authorId: '1',
      authorDescription: res.data,
      description: 'This is a book.'
    }
  }).catch(error => console.log('error', error))
})

// add router middleware:
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000...')
