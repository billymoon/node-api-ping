const Router = require('koa-router');

const router = new Router();

const get = async ctx => {
  ctx.body = 'OK';
};

router.get('/', get);

module.exports = router;
