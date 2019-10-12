"use strict";

const request = require("supertest");
const assert = require("assert");

const app = require("./server");

describe("GET /ping", () => {
  it("should return status 200 and response text ok", () => {
    request(app)
      .get("/ping")
      .expect(200)
      .then(response => {
        assert.equal(response.text, "OK");
      });
  });

  after(done => {
    app.close();
    done();
  });
});
