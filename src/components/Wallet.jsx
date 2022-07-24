import React from 'react';
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from "@web3-react/injected-connector";

export default function Wallet({setRefresh}) {

  function getErrorMessage(error) {
    if (!error) {
      return "";
    } 
    if (error instanceof NoEthereumProviderError) {
      return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } 
    if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network.";
    }
    if (error instanceof UserRejectedRequestErrorInjected) {
      return "Please authorize this website to access your Ethereum account.";
    } 
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }  

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 97, 1337, 31337]
  });

  const {
    account,
    activate,
    deactivate,
    active,
    error
  } = useWeb3React();

  const errorMessage = getErrorMessage(error);

  return (
    <div style={{borderStyle: "solid", margin: "10px", padding: "10px", borderWidth: "1px", textAlign: "center" }}>
      <h1>Wallet</h1> 
      <h1 >
        {active ? "🟢" : error ? "🔴" : "🟠"}
      </h1>
      <div>
        <h3>
          {account === undefined ? "..."  : account === null
                              ? "None" : `${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
        </h3>
      </div>
      <div>{errorMessage}</div>
      <br/>
      {account === undefined || account === null ? <button onClick={() => activate(injected)}>Connect Wallet </button> : null}
      {account !== undefined & account !== null ? <button onClick={() => deactivate()}>Disconnect Wallet </button> : null}
      <br/>
    </div>  
  );      
};
