# Get Started Bitcoin

This was created during my time as a student at Code Chrysalis.

## 0. Pre-requisite Knowledge

This meetup and demonstration assumes that you have working knowledge of git and JavaScript.

### 1. Install [VSCode](https://code.visualstudio.com/)

### 2. Install [Node.js](https://nodejs.org/en/)

### 3. Install [Git](https://git-scm.com/downloads)

### 4. Install [yarn](https://yarnpkg.com/en/docs/install)

#### Windows User

Just install them.

#### Mac User

- If you are Mac user, you need to install XCode and XCode command tools.

- After that, install [Homebrew](https://brew.sh/) and [Nodebrew](https://github.com/hokaccha/nodebrew). Git has already been installed in your mac.

- If you have already node and npm without using Nodebrew, you need not use nodebrew!

- How to install homebrew and nodebrew is the following.

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew install nodebrew

$ /usr/local/opt/nodebrew/bin/nodebrew setup_dirs

$ cd
$ vi .bash_profile
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

export NODEBREW_ROOT=/usr/local/var/nodebrew
PATH="$NODEBREW_ROOT/current/bin:$PATH"
PATH="`yarn global bin`:$PATH" // You also need to install `yarn` after it
export PATH

$ nodebrew install-binary latest

$ nodebrew use latest

```

- Install [yarn](https://yarnpkg.com/en/docs/install)

- Install [VSCode](https://code.visualstudio.com/)

## 3. Git clone this repository in your computer

```unix
git clone https://github.com/maaaashin324/Get-Started-Bitcoin-js.git
```

## 4. Yarn install

```unix
yarn install
```

## 5. Make your Bitcoin private key and public key : Bitcoin Address

- Let's make your Bitcoin Address with `1-makeBtcAddress.js`.
- Please let me know your Bitcoin Address on [Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSec7jO_a5PAP76-oVz6Ru0wDv-Xn5_5kfNZXL4-n9xKdTrujA/viewform?usp=pp_url&entry.148575301)
- make your dotenv file and input your Bitcoin WIF like the following.

```bash
$ pwd

~/Projects/Get-Started-Bitcoin-js

$ touch .env

$ code !$
```

```js
myWIF = 'write down your Bitcoin WIF. NOT YOUR BITCOIN ADDRESS!'
```

## 6. Check a transaction I sent you

- You can use some Block Explorer. For example, [Block Cypher](https://live.blockcypher.com/), [Coin base](https://www.coinbase.com/), [block explorer](https://blockexplorer.com/), [BlockChainHub](http://btc.blockchainhub.co.jp/)
- Today, I prepared the code which check your transaction using API of [BlockChainHub](http://btc.blockchainhub.co.jp/).

## 7. Return back your Bitcoin to me!

Please return back the Bitcoin to me! The Bitcoin is only for testnet, so if you keep the Bitcoin, you can use it only for test! Let's make a transaction for sending your Bitcoin to me with `3-returnBackBtc.js`.
