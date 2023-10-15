import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
import meta from "../Image/meta.png";
import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getPrice, get_LinkBerry_Contract } from "../web3/web3";
import { useStoreState } from "easy-peasy";
import Link_berrys from "../Image/link_Berry.jpg";

function Link_berry({ url }) {
  const { user } = useParams();

  const userWalletConnect = useStoreState((state) => state.user);
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [userAddrees, setUserAddress] = useState();
  const [follower, setFollower] = useState();
  const [collections, setCollections] = useState();
  const [days, setDays] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      axios
        .post(`${url}/user/getuser`, {
          username: user,
        })
        .then((res) => {
          console.log(res.data);
          setUserAddress(res.data.wallet_Address);
          const day = Math.floor(
            (new Date().getTime() / 1000 - res.data.joinAt / 1000) / 86400
          );
          setFollower(res.data.followers);
          setCollections(res.data.connections);
          setDays(day);
        });
    };
    init();
  }, [user]);

  const Buy = async () => {
    setOpen(true);
    try {
      const myusername = window.localStorage.getItem("username");
      const price = await getPrice(userAddrees, days, follower, collections);
      const contract = await get_LinkBerry_Contract();
      console.log(userAddrees, days, collections, follower);
      const data = await contract.methods
        .buySlices(userAddrees, days, collections, follower)
        .send({ from: userWalletConnect, value: price });
      if (data.status) {
        axios
          .post(`${url}/user/buy/holdings`, {
            myusername: myusername,
            boughtusername: user,
            units: 1,
          })
          .then((res) => {
            console.log("Bougth");
            setOpen(false);
          });
        axios
          .post(`${url}/user/buysell/tx`, {
            myusername: myusername,
            boughtusername: user,
            units: 1,
            method: "buy",
          })
          .then((res) => {
            console.log("Bougth");
            setOpen(false);
          });
      }
    } catch (error) {
      console.log(error);
      setOpen(false);
    }
  };

  const sell = async () => {
    try {
      const myusername = window.localStorage.getItem("username");
      const price = await getPrice(userAddrees, days, follower, collections);
      const contract = await get_LinkBerry_Contract();
      setOpen(true);
      const data = await contract.methods
        .sellSlices(userAddrees, days, collections, follower)
        .send({ from: userWalletConnect, value: price });
      if (data.status) {
        axios
          .post(`${url}/user/buysell/tx`, {
            myusername: myusername,
            boughtusername: user,
            units: 1,
            method: "Sell",
          })
          .then((res) => {
            console.log("Bougth");
            setOpen(false);
          });
      }
    } catch (error) {
      // console.log(error)
      setOpen(false);
    }
  };

  return (
    <div className="p-t-2">
      <Grid container>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Sidebar url={url} />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10} className="pa-2">
          <div className="">
            <div className="m-b-2 t-a-c ">
              <img src={Link_berrys} className=" w-11  " />
            </div>
            <div className="t-a-c f-s-1_5 f-w-600 m-b-1">({user})</div>

            <div className="max-w-50rem m-a">
              {" "}
              <div className="m-t-4 d-f j-c-s-e ">
                <button
                  className="bg_blue c-w p-x-3 p-y-0_5 b-r-15 b-n f-s-1_25"
                  onClick={() => Buy()}
                >
                  Buy
                </button>
                <button
                  className="bg_blue c-w p-x-3 p-y-0_5 b-r-15 b-n f-s-1_25"
                  onClick={() => sell()}
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Link_berry;
