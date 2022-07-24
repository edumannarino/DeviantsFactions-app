import { useState } from 'react';
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import Wallet from './components/Wallet';
import Stock from './components/Stock';
import ConvertDenom from './components/ConvertDenom';
import ListNFT from './components/ListNFT';

function App() {
  const [stock, setStock] = useState([])
  const [bills, setBills] = useState("")
  const [listNFT, setListNFT] = useState([]);

  const { account, library } = useWeb3React();
  const deviantsFactionsContract = "0x695cc5b7ADb9C1737Eb1cDBFC4df3b5680DFc6cC";
  const deviantsFactionsABI = require("./ABIs/DeviantsFactions.json");
  const deviantsFactionsNFTContract = "0xce9A15C0ca00Ef4572c6E78A4f51b8EF1c4C3Fb3";
  const deviantsFactionsNFTABI = require("./ABIs/DeviantsFactionsNFT.json");

  const getStock = async () => {
    try {
      const deviantsFactions = new ethers.Contract(deviantsFactionsContract, deviantsFactionsABI.abi, library.getSigner());   
      const newStock = await deviantsFactions.getStock()
      setStock(newStock)
      console.log(newStock);
    } catch (error) {
      window.alert(error);
    }
  }
  
  const saveStock = async (newStock) => {
    try {
      const deviantsFactions = new ethers.Contract(deviantsFactionsContract, deviantsFactionsABI.abi, library.getSigner());   
      await deviantsFactions.changeStock(newStock)
    } catch (error) {
      window.alert(error);
    }
  }

  const convert = async (amount) => {
    try {
      const deviantsFactions = new ethers.Contract(deviantsFactionsContract, deviantsFactionsABI.abi, library.getSigner());   
      const tx = await deviantsFactions.convertDenom(amount)
      const txMined = await tx.wait()
      const event = txMined.events[txMined.events.length-1].args.result
      setBills("NFTs Minted: " + event.toString())
    } catch (error) {
      window.alert(error);
    }
  }

  const getNFTs = async () => {
    const deviantsFactionsNFT = new ethers.Contract(deviantsFactionsNFTContract, deviantsFactionsNFTABI.abi, library.getSigner());
    const balance = await deviantsFactionsNFT.balanceOf(account);
    let items = [];
    for (let i=0;i<balance;i++) {
      const tokenID = await deviantsFactionsNFT.tokenOfOwnerByIndex(account, i);
      const value = await deviantsFactionsNFT.values(tokenID.toString());
      const item = {
        tokenID: tokenID.toString(), 
        value: value, 
      }  
      items.push(item);
    }
    setListNFT(items);
  }

  return (
    <div>
      <h1 align="center">Deviants' Factions Challenge</h1>
      <div style={{display: "grid", gridTemplateColumns: "400px 400px ", justifyContent: "center"}}>

        <Wallet />
        <Stock stock={stock} getStock={getStock} saveStock={saveStock}/>
        <ConvertDenom bills={bills} convertDenom={convert} />
        <ListNFT listNFT={listNFT} getNFTs={getNFTs} />
      </div>
    </div>
  );
}

export default App;
