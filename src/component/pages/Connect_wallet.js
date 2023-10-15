import mint from "../Image/mint.png";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import coinbase from "../Image/coinbase.png";
import metamask from "../Image/Metamask.png";
import walletconnect from "../Image/wallet.png";
import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";

function Home({url, Metamask, WalletC}) {



  
  return (
    <>
      <div className="max-w-35rem m-a pa-2">
        <div className="section">
          <div className="t-a-c f-w-800 f-s-3 m-b-2">Connect Wallet</div>

          <div className=" m-b-2">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </div>

          <div className="bg_clr_gray c-p b-r-15 t-a-c pa-1 p-l-3 d-f a-i-c m-b-2" onClick={()=>Metamask()}>
            <div className="">
              <img src={metamask} className="w-2 m-r-1" />
            </div>
            <div className="">Metamask</div>
          </div>
          <div className="bg_clr_gray c-p b-r-15 t-a-c pa-1 p-l-3 d-f a-i-c m-b-2" onClick={()=>WalletC()}>
            <div className="">
              <img src={walletconnect} className="w-2 m-r-1" />
            </div>
            <div className="">Wallet Connect</div>
          </div>
          <div className="bg_clr_gray c-p b-r-15 t-a-c pa-1 p-l-3 d-f a-i-c m-b-2" onClick={()=>Metamask()}>
            <div className="">
              <img src={coinbase} className="w-2 m-r-1" />
            </div>
            <div className="">Coinbase</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
