//jshint esversion:6

const Web3 = require('web3');

let provider;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and metamask installed
  provider = window.web3.currentProvider;

} else {

  if(process.env.ETHEREUM_NODE === undefined) console.log('run $ source app-env to load environment variables');

  // on the server
  provider = new Web3.providers.HttpProvider(
    process.env.ETHEREUM_NODE || 'http://localhost:8545'
  );

}

const web3 = new Web3(provider);

export default web3;
