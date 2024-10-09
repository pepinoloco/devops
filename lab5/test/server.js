const assert = require('assert');
const request = require('request');

describe('Color Code Converter API', function () {
  describe('RGB to HEX API', function () {
    const url = 'http://localhost:8888/rgbToHex?red=255&green=165&blue=0';

    it('returns status 200', function (done) {
      request.get(url, function (error, response, body) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    it('returns HEX code', function (done) {
      request.get(url, function (error, response, body) {
        assert.equal(body, 'ffa500');
        done();
      });
    });
  });

  describe('HEX to RGB API', function () {
    const url = 'http://localhost:8888/hexToRgb?hex=ffa500';

    it('returns status 200', function (done) {
      request.get(url, function (error, response, body) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });

    it('returns RGB code', function (done) {
      request.get(url, function (error, response, body) {
        assert.equal(body, '[255,165,0]');
        done();
      });
    });
  });
});
