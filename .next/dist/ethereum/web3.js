'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//jshint esversion:6
// import Web3 from 'web3';
// import HDWalletProvider from 'truffle-hdwallet-provider';
//const HDWalletProvider = require('truffle-hdwallet-provider');
var Web3 = require('web3');
var proxy = require('http-proxy-middleware');

//const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and metamask installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // on the server
  var provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7');
  // const provider = new HDWalletProvider(
  //   'pen worth manual hero special maximum weapon project injury unique maid program',
  //   'https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7'
  // );
  web3 = new Web3(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJwcm94eSIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU0sT0FBTyxBQUFQLEFBQU47QUFDQSxJQUFNLFFBQVEsQUFBUixBQUFOOztBQUVBOztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN2RTtBQUNBO1NBQU8sSUFBSSxBQUFKLEtBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUVEO0FBSkQsT0FJTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksS0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtTQUFPLElBQUksQUFBSixLQUFTLEFBQVQsQUFBUCxBQUNEO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc29oYW16ZW1zZS9zb2hhbS93b3Jrc3BhY2UvYmxvY2tjaGFpbi9ldGhlcmV1bS9raWNrc3RhcnQyIn0=