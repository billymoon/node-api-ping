const assert = require("assert");
const td = require("testdouble");

describe("ping api", () => {
  let stubs;
  let routes;

  beforeEach(() => {
    stubs = {
      Router: td.replace("koa-router")
    };
    routes = require("../../src");
  });

  afterEach(() => {
    td.reset();
  });

  it("exports a router", () => {
    assert.deepEqual(new stubs.Router(), routes);
  });

  it("handles ping", () => {
    td.verify(stubs.Router.prototype.get("/", td.matchers.isA(Function)));
  });

  describe("ping handler", () => {
    let pingHandler;
    let ctx = {};

    beforeEach(() => {
      pingHandler = td.matchers.captor();
      td.verify(stubs.Router.prototype.get("/", pingHandler.capture()));
      pingHandler = pingHandler.value;
    });

    it("returns a status of ok", async () => {
      await pingHandler(ctx);
      assert.equal(ctx.body, "OK");
    });
  });
});
