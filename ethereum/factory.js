//jshint esversion:6
import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  process.env.ADDRESS || '0x7af6BA9bB6994c5A066a8240C2Ee64C12B6EEEcA'
);

export default instance;
