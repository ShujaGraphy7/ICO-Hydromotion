import React,{useState,useEffect} from "react";
import { useContract, useProvider } from "wagmi";
import { getAccount } from "@wagmi/core";

import Hydromotion from "../ABIs/Hydromotion.json";

const hydromotionAddress = process.env.REACT_APP_HYDROMOTION_ADDRESS;
const presaleAddress = process.env.REACT_APP_PRESALE_ADDRESS;

function Left() {
  const provider = useProvider();
  const account = getAccount();


  const [currentICOround, setCurrentICOround] = useState("1");
  const hydromotion = useContract({
    address: hydromotionAddress,
    abi: Hydromotion,
    signerOrProvider: provider,
  });

  useEffect(() => {
    
    getTokenInfo__CurrentICOround();
    // eslint-disable-next-line
  }, [account]);

  const getTokenInfo__CurrentICOround = async () => {
    await hydromotion?.balanceOf(presaleAddress).then((res) => {
      let resp = res;
      if (resp <= 1000000000000) setCurrentICOround("ROUND 4");
      else if (resp <= 2000000000000) setCurrentICOround("ROUND 3");
      else if (resp <= 3000000000000) setCurrentICOround("ROUND 2");
      else if (resp <= 4000000000000) setCurrentICOround("ROUND 1");
      else setCurrentICOround("All Rounds Over");

    });
  };
  
  return (
    <div className=" py-5 my-auto">
      <div className="text-2xl md:text-4xl lg:text-7xl font-extrabold uppercase mx-5">
        <p>
        HYDROMOTION <br /> COIN<br/>PRESALE
           <span className="text-lime-600">  {currentICOround}</span>
        </p>
      </div>
      <div className="text-xl max-w-[90vw] text-justify m-5">
        <p>
        The first presale for Hydromotion's ground-breaking new coin, 
        Hydromotion Coin (HYM), has begun. 
        Early investors will have the chance to purchase Hydromotion Coins
        at a reduced price prior to the official public debut through the presale.

        </p>
      </div>
      
    </div>
  );
}

export default Left;
