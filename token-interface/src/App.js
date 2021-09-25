import { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Contract } from '@ethersproject/contracts'
import styled from 'styled-components';
import Token from './tokenAbi.json';


const AppBody = styled.div`
background-color: #282c34;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
`

const TransferContainer = styled.div`
background-color: #EEEEEE;  
border-radius: 15px;
display: flex inline;
height: 350px;
width: 500px;
padding: 20px;
`

const TransferHeader = styled.div`
text-align: center;
`

const TransferDetails = styled.div`
text-align: left;
margin: 1px 1px;
`

const TransferInput = styled.input`
border: 1px #black;
font-size: 15px;
width: 60%;
margin: 1px 2px;
padding: 3px;
`

const TransferButton = styled.button`
background-color: rgb(31, 199, 212);
border: 1px #black;
border-radius: 15px;
box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
height: 48px;
width: 40%;
align-items: center;
font-size: 20px;
font-weight: 600;
margin: 4px;
padding: 4px;
`

const injected = new InjectedConnector({
  supportedChainIds: [1337],
})


function App() {

  const { account, activate, active, library } = useWeb3React()
  const [balance, setBalance] = useState()
  const [targetAcct, setTargetAcct] = useState()
  const [trfAmt, setTrfAmt] = useState()
  const tokenAddress = "0xFD83403Aa0e55b5C17D289872b4bb2fB557bA2E3"
  getTokenBalance()

  function connectWallet() {
    if (!account) {
      activate(injected)
    }
  }

  async function getTokenBalance() {
    if (active) {
      const contract = new Contract(tokenAddress, Token.abi, library.getSigner(account).connectUnchecked())
      const balance = await contract.balanceOf(account)
      setBalance(balance.toLocaleString() + ' TKN')
      }
  }

  async function transferToken() {
    if (trfAmt !== undefined && targetAcct !== undefined) {
      const contract = new Contract(tokenAddress, Token.abi, library.getSigner(account).connectUnchecked())
      const success = await contract.transfer(targetAcct, trfAmt)
      console.log(success)
      getTokenBalance()
    }
  }

  return (
    <AppBody>
      <TransferContainer>
        <TransferHeader>
          <h1>Transfer Token</h1>
        </TransferHeader>
        <TransferDetails>
          <p><b>Account: </b>{!account ? "" : account}</p>
          <p><b>Balance: </b>{!account ? "" : balance}</p>
          <br></br>
          <p><b>Target Account: </b><TransferInput placeholder='0x0000000000000000000' onChange={event => setTargetAcct(event.target.value)}/></p>
          <p><b>Transfer Amount: </b><TransferInput placeholder='0.0' onChange={event => setTrfAmt(event.target.value)}/></p>
          <br></br>
        </TransferDetails>
        {!account ? 
          <TransferButton onClick={connectWallet}>Connect Wallet</TransferButton> :
          <TransferButton onClick={transferToken}>Transfer</TransferButton>
        }
      </TransferContainer>
    </AppBody>
  );
}

export default App;
