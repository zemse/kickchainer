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
  // on the server
  provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7');
}

var web3 = new Web3(provider);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJwcm92aWRlciIsIndpbmRvdyIsIndlYjMiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxPQUFPLEFBQVAsQUFBTjs7QUFFQSxJQUFJLGdCQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3ZFO0FBQ0E7YUFBVyxPQUFPLEFBQVAsS0FBWSxBQUF2QixBQUVEO0FBSkQsT0FJTyxBQUNMO0FBQ0E7YUFBVyxJQUFJLEtBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ1QsQUFEUyxBQUFYLEFBSUQ7OztBQUVELElBQU0sT0FBTyxJQUFJLEFBQUosS0FBUyxBQUFULEFBQWIsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zb2hhbXplbXNlL3NvaGFtL3dvcmtzcGFjZS9ibG9ja2NoYWluL2V0aGVyZXVtL2tpY2tzdGFydDIifQ==