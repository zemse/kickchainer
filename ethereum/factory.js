//jshint esversion:6
import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7658263482947216CD398cAF6434Ec8B530Db1CA'
);

export default instance;
