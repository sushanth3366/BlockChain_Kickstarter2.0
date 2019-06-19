import Web3 from 'web3';

let web3 ;

if(typeof window !=='undefined' && typeof window.web3!=='undefined'){
  // we are in brower and metamSK IS RUNNING

  web3 = new Web3(window.web3.currentProvider);
}
else{
  //we are on server or the user is not running metamask
 const provider=new Web3.providers.HttpProvider(
   'https://rinkeby.infura.io/v3/de97edd91145471199555841549fb3bc'
 );
 web3=new Web3(provider);
}

export default web3;
