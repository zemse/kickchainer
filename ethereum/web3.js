//jshint esversion:6
// import Web3 from 'web3';
// import HDWalletProvider from 'truffle-hdwallet-provider';
//const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const proxy = require('http-proxy-middleware');

//const web3 = new Web3(window.web3.currentProvider);

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and metamask installed
  web3 = new Web3(window.web3.currentProvider);

} else {
  // on the server
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7'
  );
  // const provider = new HDWalletProvider(
  //   'pen worth manual hero special maximum weapon project injury unique maid program',
  //   'https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7'
  // );
  web3 = new Web3(provider);
}

export default web3;
