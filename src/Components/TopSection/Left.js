import React,{useState,useEffect} from "react";
import { getAccount } from "@wagmi/core";
import { ethers } from "ethers";
import Hydromotion from "../ABIs/Hydromotion.json";

const hydromotionAddress = process.env.REACT_APP_HYDROMOTION_ADDRESS;
const presaleAddress = process.env.REACT_APP_PRESALE_ADDRESS;

function Left() {

  const account = getAccount();


  const [currentICOround, setCurrentICOround] = useState("1");
  
const privateKey = process.env.REACT_APP_ADMIN_PRIVATEkEY;
  const NODE_URL = process.env.REACT_APP_NODE_URL;

  const customProvider = new ethers.providers.JsonRpcProvider(NODE_URL);

  const customSigner = new ethers.Wallet(privateKey, customProvider);

  const customContract_Inst = new ethers.Contract(
    hydromotionAddress,
    Hydromotion,
    customSigner
  );
  useEffect(() => {
    
    getTokenInfo__CurrentICOround();
    // eslint-disable-next-line
  }, [account]);

  const getTokenInfo__CurrentICOround = async () => {
    await customContract_Inst?.balanceOf(presaleAddress).then((res) => {
      let resp = res;
      if (resp <= 1000000000000) setCurrentICOround(" 4");
      else if (resp <= 2000000000000) setCurrentICOround(" 3");
      else if (resp <= 3000000000000) setCurrentICOround(" 2");
      else if (resp <= 4000000000000) setCurrentICOround(" 1");
      else setCurrentICOround("---");

    });
  };
  
  return (
    <div className=" py-5 my-auto">
      <div className="text-5xl md:text-6xl font-extrabold uppercase mx-5">
        <p>
        HYDROMOTION <br /> COIN<br/> 
           <span className="text-lime-600 text-4xl md:text-5xl ">VORVERKAUFS RUNDE {currentICOround}</span>
        </p>
      </div>
      <div className="text-xl max-w-[90vw] text-justify m-5">
        <p>
        Der erste Vorverkauf für Hydromotion's bahnbrechende neue Coin, 
        Hydromotion Coin (HYM), hat begonnen. 
        Frühzeitige Investoren haben die Möglichkeit, 
        Hydromotion Coins zu einem reduzierten Preis zu erwerben, 
        bevor das offizielle öffentliche Debüt durch den Vorverkauf erfolgt.
        </p>
      </div>
      
    </div>
  );
}

export default Left;
