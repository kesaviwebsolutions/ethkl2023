import slice from "../Image/slice.png";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";
import { generateVRS, getPrice, get_LinkBerry_Contract } from "../web3/web3";
import axios from "axios";


function Home({url}) {

  const [sign, setSign] = useState()
  const [follower, setFollower] = useState()
  const [collections, setCollections] = useState()
  const [days, setDays] = useState()
  const [user, setUser] = useState();


  useEffect(()=>{
    const init = async()=>{
        const user = window.localStorage.getItem("username");
        axios.post(`${url}/user/getuser`,{
          username:user
        }).then(async(res)=>{
          // console.log(res.data)
          const day = Math.floor((new Date().getTime()/1000 - res.data.joinAt/1000)/86400)
          setUser(res.data.wallet_Address)
          setFollower(res.data.followers)
          setCollections(res.data.connections)
          setDays(day)
        })
      }
    init();
  },[])

  const Buy = async()=>{
    try {
      const userlogedin = window.localStorage.getItem("username");
      const price = await getPrice(user, days,follower, collections);
      const contract = await get_LinkBerry_Contract();
      console.log(user, days, collections, follower)
      const data = await contract.methods.buySlices(user, days, collections, follower).send({from:user,value:price});
      if(data.status){
        window.location.replace(`/linkberry/profile/${userlogedin}`)
      }
    } catch (error) {
      // console.log(error)
    }
  }



  return (
    <>
      <div className="max-w-35rem m-a pa-2">
        <div className="section">
          <div className="m-b-2  ">
            <img src={slice} className="w-3" />
          </div>
          <div className=" f-w-600  m-b-1">Buy your first slice </div>
          <div className=" m-b-2">
            every user on Link.Berry has their account divided by slices. These
            slices can be bought and sold on a person's profile and their price
            goes up and down based on how many are currently circulating. the
            price also reflects the engagement you get on LinkedIn and how
            valuable your connections are. you'll earn trading fees every time
            your slices are bought and sold by anyone. to create your profile,
            buy the first slice to your own room for free.
          </div>
       
          <div className=" m-t-3 w-100">
            <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 " onClick={()=>Buy()}>
              Buy Slice for $0
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
