import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
import meta from "../Image/meta.png";
import { Grid } from "@mui/material";
import axios from "axios";
import { getPrice } from "../web3/web3";

function Link_berry({url}) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [follower, setFollower] = useState()
  const [collections, setCollections] = useState()
  const [days, setDays] = useState()
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [holders, setHolders] = useState([])
  const [holdings, setHoldings] = useState([])
  const [price, setPrice] = useState(0)


  useEffect(()=>{
    const init = async()=>{
        const user = window.localStorage.getItem("username");
        axios.post(`${url}/user/getuser`,{
          username:user
        }).then(async(res)=>{
          console.log(res.data)
          const day = Math.floor((new Date().getTime()/1000 - res.data.joinAt/1000)/86400)
          setUsername(user)
          setHoldings(res.data.holders)
          setHolders(res.data.holdings)
          setUser(res.data.wallet_Address)
          setFollower(res.data.followers)
          setCollections(res.data.connections)
          setDays(day)
          const price = await getPrice(res.data.wallet_Address, day, res.data.followers, res.data.connections)
          setPrice(price)
        })
      }
    init();
  },[])




  return (
    <div className="p-t-2">
      <Grid container>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Sidebar url={url}/>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10} className="pa-2">
          <div className="">
            <div className="m-b-2 t-a-c ">
              <img src={meta} className="b-r-50 w-15  " />
            </div>
            <div className="t-a-c f-s-1_5 f-w-600 m-b-1">
              ({username})
            </div>

            <div className="d-f a-i-c j-c-c m-b-2">
            <div className="m-r-1">{price/10**18} MNT </div>
              <div className="m-r-1">{holders.length} Slice holders</div>
              <div className="">{holdings.length} Slice owned</div>
            </div>
            <div className="max-w-50rem m-a">
              {" "}
              <Tabs
                defaultActiveKey="Transaction"
                id="uncontrolled-tab-example"
                className="mb-3 m-t-3"
              >
                <Tab eventKey="Transaction" title="Transaction">
                  <div className="d-f a-i-c j-c-s-b  m-y-1">
                    <div className="m-r-2 f-w-600">
                      <img src={blue_circle} className="w-2_5 " /> &nbsp;
                      arrnaya
                    </div>
                    <div className="">2 key</div>
                  </div>

                  <div className="d-f a-i-c j-c-s-b  m-y-1">
                    <div className="m-r-2 f-w-600">
                      <img src={blue_circle} className="w-2_5 " /> &nbsp;
                      arrnaya
                    </div>
                    <div className="">2 key</div>
                  </div>
                  <div className="d-f a-i-c j-c-s-b  m-y-1">
                    <div className="m-r-2 f-w-600">
                      <img src={blue_circle} className="w-2_5 " /> &nbsp;
                      arrnaya
                    </div>
                    <div className="">2 key</div>
                  </div>
                  <div className="d-f a-i-c j-c-s-b  m-y-1">
                    <div className="m-r-2 f-w-600">
                      <img src={blue_circle} className="w-2_5 " /> &nbsp;
                      arrnaya
                    </div>
                    <div className="">2 key</div>
                  </div>
                </Tab>
                <Tab eventKey="Slice Holder" title="Slice Holder">

                 {holders && holders.map((res)=>{
                  return <div className="d-f a-i-c j-c-s-b  m-y-1">
                  <div className="m-r-2 f-w-600">
                    <img src={blue_circle} className="w-2_5 " /> &nbsp;
                    {res.user}
                  </div>
                  <div className="">{res.value} key</div>
                </div>
                 }) }

                 
                </Tab>
                <Tab eventKey="Slice Owned" title="Slice Owned">

                 {holdings && holdings.map((res)=>{
                  return <div className="d-f a-i-c j-c-s-b  m-y-1">
                  <div className="m-r-2 f-w-600">
                    <img src={blue_circle} className="w-2_5 " /> &nbsp;
                   {res.user}
                  </div>
                  <div className="">{res.value} key</div>
                </div>
                 }) }

                  
                </Tab>
              </Tabs>

              <div className="m-t-4 d-f j-c-s-e ">
              <button className="bg_blue c-w p-x-3 p-y-0_5 b-r-15 b-n f-s-1_25">Buy</button>
              <button className="bg_blue c-w p-x-3 p-y-0_5 b-r-15 b-n f-s-1_25">Sell</button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Link_berry;
