//jshint esversion:6
import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3094Debf1E63455C0cc788878E18bbF9f4B550FB'
);

export default instance;
