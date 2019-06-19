import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance= new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x76f12e75C61A81D5A28aAB8898369406ca30FFF6' //address of deployed contract
);

export default instance;
