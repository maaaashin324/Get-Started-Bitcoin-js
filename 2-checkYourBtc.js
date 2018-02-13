const { fetch, Headers } = require('node-fetch');
const bitcoin = require('bitcoinjs-lib');

// Step2: Check Bitcoin I sent you and memo!
const myBitcoinAddress = 'mnXA4E4yGCmDaoc679Lnf1MvwxQ5oqP9qg';
const apiUrl = `http://tapi.qbit.ninja/balances/${myBitcoinAddress}?unspentonly=true`;

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const reqInit = {
  method: 'GET',
  header: headers,
};

fetch(apiUrl, reqInit)
  .then(res => console.log(res))
  .catch(err => console.log(err));
