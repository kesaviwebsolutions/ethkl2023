import mint from "../Image/mint.png";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";
import blue_circle from "../Image/blue_circle.png";
import chakra from "../Image/chakra.png";
import { AiOutlineCopy } from "react-icons/ai";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { userBalanceOfChain } from "../web3/web3";

function Home({url}) {
  const user = useStoreState((state) => state.user);
  const [username, setUserName] = useState();
  const [wallet, setWallet] = useState();
  const [balance, setBalance] = useState(0)

  useEffect(()=>{
    const init = async()=>{
        const user = window.localStorage.getItem("username");
        axios.post(`${url}/user/getuser`,{
          username:user
        }).then(async(res)=>{
          setUserName(user)
          const balance = await userBalanceOfChain(res.data.wallet_Address)
          setWallet(res.data.wallet_Address)
          setBalance(balance)
          console.log(res.data)
        })
      }
    init()

    setInterval(()=>{
      init()
    },5000)
  },[user,url])
  

  return (
    <>
      <div className="max-w-35rem m-a">
        <div className="section">
          <div className="m-b-2  ">
            <img src={mint} className="w-3" />
          </div>
          <div className=" f-w-600  m-b-1">
            {" "}
            Deposit MNT in your berry.Link account{" "}
          </div>
          <div className=" m-b-2">
            Link.berry is currently in beta. Get an invite from an existing user
            to sign up
          </div>

          <div className="bg_clr_gray b-r-15 pa-1 d-f j-c-s-b a-i-c m-b-2">
            <div className="d-f a-i-c ">
              <div className="">
                <img src={blue_circle} className="w-2 m-r-1" />
              </div>
              <div className="">Your Balance</div>
            </div>

            <div className="f-w-600">{balance} MNT</div>
          </div>
          <div className="bg_clr_gray b-r-15 pa-1 d-f a-i-c m-b-2">
            <div className="">
              <img src={chakra} className="w-2 m-r-1" />
            </div>
            <div className="">
              <div className="">{username}</div>
              <div className="">
                {wallet} &nbsp;{" "}
                <AiOutlineCopy />
              </div>
            </div>
          </div>

          {balance > 0 ?<div className=" m-t-3 w-100">
            <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 ">
              Proceed
            </button>
          </div> : <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 ">
              insufficient balance
            </button>}
        </div>
      </div>
    </>
  );
}

export default Home;
