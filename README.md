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