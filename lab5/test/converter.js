const assert = require('assert');
const converter = require('../src/converter');

describe('Color Code Converter', function () {
  describe('converter.rgbToHex()', function () {
    it('returns HEX code', function () {
      const orangeHex = converter.rgbToHex(255, 165, 0)
      assert.equal(orangeHex, 'ffa500');
    });
  });

  describe('converter.hexToRgb()', function () {
    it('returns RGB code', function () {
      const orange = converter.hexToRgb('ffa500')
      assert.deepEqual(orange, [255, 165, 0])
    });
  });
});
