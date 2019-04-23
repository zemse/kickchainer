//jshint esversion:6

const Web3 = require('web3');

let provider;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and metamask installed
  provider = window.web3.currentProvider;

} else {
  // on the server
  provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7'
  );

}

const web3 = new Web3(provider);

export default web3;
