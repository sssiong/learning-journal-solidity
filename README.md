# Learning Journal (Solidity)

## Purpose

A place to document down my learning progress with solidity

## Folders

| Folder          | Description                                    |
| --------------- | ---------------------------------------------- |
| token           | Solidity contract for a token called "Token"   |
| token-interface | Reactjs UI to transfer "Token" between wallets |


## Required Software

- [Docker](https://docs.docker.com/get-docker/)
- [Ganache](https://www.trufflesuite.com/ganache)

## Setup

``` base
docker build -t solidity .
docker run --rm -it -v ${PWD}:/codes -p 3000:3000 -p 7545:7545 --name solidity solidity /bin/bash
```


## 4. Deploying Contract

``` bash
truffle migrate
```

## 5. Interacting with Deployed Contract

Launch truffle console

``` bash
truffle console
```

Interact with deployed contract in console

``` js
let accounts = await web3.eth.getAccounts();
let token = await Token.deployed();

// check account balance
token.balanceOf(accounts[0]).then(r => r.toString(10))

// transfer tokens to account
token.transfer(accounts[1], 98765)

let factory = await Factory.deployed();
let tokenA = await TokenA.deployed();
let tokenB = await TokenB.deployed();
let router = await Router.deployed();

```

## 6. Run UI

``` bash
cd swap-ui
npm start
```