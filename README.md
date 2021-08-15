# Learning Journal (Solidity)

## Purpose

A place to document down my learning progress with solidity

## Setup

``` base
docker build -t solidity .
docker run --rm -it -v ${PWD}:/codes -p 7545:7545 --name solidity solidity /bin/bash
```