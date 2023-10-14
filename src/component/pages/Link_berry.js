import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { getPrice } from "../web3/web3";

function Link_berry({url}) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [alluser, setAlluser] = useState([])

  useEffect(()=>{
    const init = async()=>{
      axios.get(`${url}/users/all`).then(async(res)=>{
        let users = res.data 
        for(let i = 0; i < users.length; i++){
          const day = Math.floor((new Date().getTime()/1000 - users[i].joinAt/1000)/86400)
          const price = await getPrice(users[i].wallet_Address, day, users[i].followers, users[i].connections)
          users[i].price = price
        }
        setAlluser(users)
      }).catch((error)=>{
        console.log(error)
      })
    }
    init();
  },[])

  console.log(alluser)



  return (
    <div className="p-t-2">
      <Grid container>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Sidebar url={url}/>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <div className="f-s-1_5 f-w-600  m-b-1">
            {" "}
            <span className="blue_clr">Link</span>.berry
          </div>
          <hr />
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 m-t-3"
          >
            <Tab eventKey="home" title="Connection">
              <Link to="/linkberry/key">
                <div className="">
                  <div className="d-f a-i-c m-y-2">
                    <div className="m-r-2">
                      <img src={blue_circle} className="w-2_5" />
                      <img src={blue_circle} className="w-2_5 m-l-_2px" />
                    </div>
                    <div className="">
                      <div className="f-w-600">Arun Yadav</div>
                      <div className="f-s-0_8">0.002 MNT</div>
                    </div>
                  </div>
                </div>
              </Link>
              
            </Tab>
            <Tab eventKey="profile" title="Global">
             {alluser && alluser.map((res)=>{
              return  <Link to={`/linkberry/${res.userName}`}>
              <div className="">
                <div className="d-f a-i-c m-y-2">
                  <div className="m-r-7 f-w-600">
                  
                  {res.userName}
                  </div>
                  <div className="">
                 
                    <div className="">{res.price/10**18} MNT</div>
                  </div>
                </div>
              </div>
            </Link>
             })}
          
            
            </Tab>
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
}

export default Link_berry;
