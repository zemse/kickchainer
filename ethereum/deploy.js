//jshint esversion:8
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'provide stereo agree cage inner garage level sibling cross hip trick play',
  'https://rinkeby.infura.io/d64e4d75857d4bbe8e196ca93328c4b7'
);

const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Account balance: ${web3.utils.fromWei(await web3.eth.getBalance(accounts[0]),'ether')} ETH`);

  console.log('Attempting to deploy from', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x'+compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('The contract is deployed at', result.options.address);

  console.log(`Account balance: ${web3.utils.fromWei(await web3.eth.getBalance(accounts[0]),'ether')} ETH`);

})();
