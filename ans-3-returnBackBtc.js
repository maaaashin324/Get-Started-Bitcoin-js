// config
const fetch = require('node-fetch');
const bitcoin = require('bitcoinjs-lib');
require('dotenv').config();

const testNet = bitcoin.networks.testnet;
const keyPair = bitcoin.ECPair.fromWIF(process.env.myWIF, testNet);
const myBitcoinAddress = keyPair.getAddress();

const masaBtcAddress = 'n2hq42xPhcWuBYQcp6GFpWYAgMoxbcYStm';

const broadCastUrl = 'http://tapi.qbit.ninja/transactions/';

// Step3: make returning back transcation
// Input a transaction Id and outpoint as your memo.

// Get your Bitcoin and specify which you use as transaction input
// Make your transaction

// Add transaction input. This means what you have.

// Add transaction output. This means who you will send your Bitcoin and how much you will send.
// And DO NOT FORGET to send yourself as change if you want.

// Sign your transaction

// Check your transaction

// Broadcast
// implement fetch!
