const expect = require('chai').expect;
const request = require('supertest');
var app = require('../app');
var http = require('http');

describe('Health Check', function() {
  it('should return 200 ok', function(done) {
    request(http.createServer(app))
      .get('/health-check')
      .expect(200, done)
  });

  it('should return 404 not found', function(done) {
    request(http.createServer(app))
      .get('/what')
      .expect(404, done)
  });
});