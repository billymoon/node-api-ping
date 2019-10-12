const Koa = require("koa");
const router = require("koa-router")();
const ping = require("../../../src");
const app = new Koa();

router.use("/ping", ping.routes(), ping.allowedMethods());

app.use(router.routes(), router.allowedMethods());

module.exports = app;
