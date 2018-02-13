const bitcoin = require('bitcoinjs-lib');

// Step3: make returning back transcation
const masaBtcAddress = 'n2hq42xPhcWuBYQcp6GFpWYAgMoxbcYStm';
const testNet = '';
const keyPair = '';
const myBitcoinAddress = '';

// Input a transaction Id and outpoint as your memo.
const getBtcTxId = '';
const yourBtcOutPoint = 0;

// Get your Bitcoin and specify which you use as transaction input
// Make your transaction
const txBuilder = new bitcoin.TransactionBuilder(testNet);

// Add transaction input. This means what you have.
txBuilder.addInput(getBtcTxId, yourBtcOutPoint);

// Add transaction output. This means who you will send your Bitcoin and how much you will send.
// And DO NOT FORGET to send yourself as change if you want.
txBuilder.addOutput(masaBtcAddress, 12000);
txBuilder.addOutput(myBitcoinAddress, 10000);

// Sign your transaction
txBuilder.sign(0, keyPair);
txBuilder.sign(1, keyPair);

// Check your transaction
const rawTxData = txBuilder.build().getHash();

// Broadcast
// implement fetch!
