'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3.js');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jshint esversion: 6
exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7O0FBSkE7a0JBSWUsbUJBQUE7U0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDckMsS0FBQSxBQUFLLE1BQU0sbUJBRGEsQUFDeEIsQUFBb0IsWUFEUCxBQUFXLEFBRXhCO0FBRkYiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvaGFtemVtc2Uvc29oYW0vd29ya3NwYWNlL2Jsb2NrY2hhaW4vZXRoZXJldW0va2lja3N0YXJ0MiJ9