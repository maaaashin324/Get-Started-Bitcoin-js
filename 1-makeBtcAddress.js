// config
const bitcoin = require('bitcoinjs-lib');
require('dotenv').config();

// Tips:
// BlockExplorer : http://tbtc.blockchainhub.co.jp/

// Step1: Make your Bitcoin address

// You cannot change the config of network because we use only TestNet today
const testNet = bitcoin.networks.testnet;

// Let's make your Bitcoin Address in order to get TestNet Bitcoin;
const keyPair = bitcoin.ECPair.makeRandom({ network: testNet });

// Bitcoin Secret is a bunch of words which shows your Private key.
// When you get a Bitcoin secret, DO NOT FORGET to memoize your Bitcoin Secret.
const myWIF = keyPair.toWIF();
console.log(myWIF);

// If you have Bitcoin Secret, you can retrieve your Private key.
// const keyPair = bitcoin.ECPair.fromWIF(process.env.myWIF, testNet);

// Bitcoin Address is necessary to get Bitcoin.
// When you get a Bitcoin address, DO NOT FORGET to memoize your Bitcoin Secret.
const myBitcoinAddress = keyPair.getAddress();
console.log(myBitcoinAddress);
