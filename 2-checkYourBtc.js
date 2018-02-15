// config
const fetch = require('node-fetch');
const bitcoin = require('bitcoinjs-lib');
require('dotenv').config();

const testNet = bitcoin.networks.testnet;
const keyPair = bitcoin.ECPair.fromWIF(process.env.myWIF, testNet);
const myBitcoinAddress = keyPair.getAddress();

const balanceUrl = `http://tapi.qbit.ninja/balances/${myBitcoinAddress}?unspentonly=true`;
const txIdUrl = 'http://tapi.qbit.ninja/transactions/';

// Step2: Check Bitcoin I sent you and memo!
fetch(balanceUrl)
  .then(res => res.json())
  .then((json) => {
    const { operations } = json;
    const yourBitcoin = [];
    console.log('=============================See your Bitcoin and outpoint=====================================');
    console.log(operations);
    operations.forEach((operation) => {
      operation.receivedCoins.forEach((receivedCoin) => {
        const { scriptPubKey } = receivedCoin;
        const scriptPubKeyBuffer = Buffer.from(scriptPubKey, 'hex');
        const verifyAddress = bitcoin.address.fromOutputScript(scriptPubKeyBuffer, testNet);
        if (myBitcoinAddress === verifyAddress) {
          console.log('=============================This is your Bitcoin!=====================================');
          console.log(receivedCoin);
          yourBitcoin.push(receivedCoin);
        }
      });
    });
    console.log('==============================See your transaction====================================');
    return yourBitcoin[0].transactionId;
  })
  .then(txId => fetch(`${txIdUrl}${txId}`))
  .then(res => res.json())
  .then(transaction => console.log(transaction))
  .catch(err => console.log(err));
