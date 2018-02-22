// config
const fetch = require('node-fetch');
const bitcoin = require('bitcoinjs-lib');
require('dotenv').config();

const testNet = bitcoin.networks.testnet;
const keyPair = bitcoin.ECPair.fromWIF(process.env.myWIF, testNet);
const myBitcoinAddress = keyPair.getAddress();

const masaBtcAddress = 'n2hq42xPhcWuBYQcp6GFpWYAgMoxbcYStm';

// Step3: make returning back transcation

// Input a transaction Id and outpoint as your memo.
// const getBtcTxId = '';
// const yourBtcOutPoint = 0;

// Get your Bitcoin and specify which you use as transaction input
// Make your transaction
// const txBuilder = new bitcoin.TransactionBuilder(testNet);

// Add transaction input. This means what you have.
// txBuilder.addInput(getBtcTxId, yourBtcOutPoint);

// Add transaction output. This means who you will send your Bitcoin and how much you will send.
// And DO NOT FORGET to send yourself as change if you want.
// txBuilder.addOutput(masaBtcAddress, 8000);
// txBuilder.addOutput(myBitcoinAddress, 1000);

// Sign your transaction
// txBuilder.sign(0, keyPair);

// Check your transaction
// const rawTxData = txBuilder.build().toHex();

// Broadcast
// implement fetch!
// const broadCastUrl = 'http://tapi.qbit.ninja/transactions/';
// fetch(broadCastUrl, {
//   method: 'POST',
//   body: JSON.stringify(rawTxData),
//   headers: { 'Content-Type': 'application/json' },
// })
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err));
