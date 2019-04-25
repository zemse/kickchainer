'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//jshint esversion:6

var Web3 = require('web3');

var provider = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and metamask installed
  provider = window.web3.currentProvider;
} else {

  if (process.env.ETHEREUM_NODE === undefined) console.log('run $ source app-env to load environment variables');

  // on the server
  provider = new Web3.providers.HttpProvider(process.env.ETHEREUM_NODE || 'http://localhost:8545');
}

var web3 = new Web3(provider);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJwcm92aWRlciIsIndpbmRvdyIsIndlYjMiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm9jZXNzIiwiZW52IiwiRVRIRVJFVU1fTk9ERSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxPQUFPLEFBQVAsQUFBTjs7QUFFQSxJQUFJLGdCQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3ZFO0FBQ0E7YUFBVyxPQUFPLEFBQVAsS0FBWSxBQUF2QixBQUVEO0FBSkQsT0FJTyxBQUVMOztNQUFHLFFBQVEsQUFBUixJQUFZLEFBQVosa0JBQThCLEFBQWpDLFdBQTRDLFFBQVEsQUFBUixJQUFZLEFBQVosQUFFNUM7O0FBQ0E7YUFBVyxJQUFJLEtBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ1QsUUFBUSxBQUFSLElBQVksQUFBWixpQkFBNkIsQUFEcEIsQUFBWCxBQUlEOzs7QUFFRCxJQUFNLE9BQU8sSUFBSSxBQUFKLEtBQVMsQUFBVCxBQUFiLEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc29oYW16ZW1zZS9zb2hhbS93b3Jrc3BhY2UvYmxvY2tjaGFpbi9ldGhlcmV1bS9raWNrc3RhcnQyIn0=