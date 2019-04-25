const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db');
const app = new Koa();
const router = new Router();

// routes
router.get('/users', (ctx, next) => {
  ctx.body = db.getUsers();
});

router.get('/users/:id', (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = db.getUser(id);
});

router.put('/users/:id', (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = db.updateUser(id);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);
