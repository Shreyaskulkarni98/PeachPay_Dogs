var assert = require("assert");
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3011");

describe("MochaTests for APIs", function () {
  it("Server running succesfully", function (done) {
    server
      .get("/")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
  it("List of dogs API - successful", function (done) {
    server
      .get("/peachpay/dogs")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
  it("All images of a dog with breed and subbreed - successful", function (done) {
    server
      .get("/peachpay/dog/pinscher/miniature/images")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
  it("All images of a dog with breed - successful", function (done) {
    server
      .get("/peachpay/dog/dingo/images")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});
