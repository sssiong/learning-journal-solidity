pragma solidity ^0.8.0;

contract Token {
    mapping(address => uint) public balances;
    uint public totalSupply = 1000 * 10 ** 18;
    string public name = "Token";
    string public symbol = "TKN";
    uint public decimals = 18;

    event Transfer(address indexed from, address indexed to, uint value);

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address owner) public view returns(uint) {
        return balances[owner];
    }

    function transfer(address to, uint value) public returns(bool) {
        require(balances[msg.sender] >= value, "Insufficient balance");
        balances[to] += value;
        balances[msg.sender] -= value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}