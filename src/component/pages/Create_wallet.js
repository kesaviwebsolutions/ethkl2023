import mint from "../Image/mint.png";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";
import blue_circle from "../Image/blue_circle.png";
import chakra from "../Image/chakra.png";
import { createExternalWallet } from "../web3/web3";
import axios from "axios";



function Home({url}) {

 
  
  const ExternalWallet = async()=>{
    try {
      const user = window.localStorage.getItem("username")
      const data = await createExternalWallet()
      axios
      .post(`${url}/join/fillinguser`, {
        username:user,
        walletType:"internal",
        wallet_Address:data.address,
        walletKey:data.key
      })
      .then((res) => {
        // window.localStorage.setItem("username", userName);
        window.location.replace("/fundwallet");
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="max-w-35rem m-a">
        <div className="section">
          <div className=" m-b-3 w-100">
            <a >
              <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 " onClick={()=>ExternalWallet()}>
                Create Wallet
              </button>
            </a>
          </div>

          <div className="t-a-c m-b-3">or</div>
          <div className="  w-100">
            <a href="/connectwallet">
              <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100" >
                Use Existing Wallet
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
