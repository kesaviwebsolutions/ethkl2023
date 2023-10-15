import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";
import axios from "axios";

function Link_berry({ url }) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [userAddrees, setUserAddress] = useState();
  const [follower, setFollower] = useState();
  const [collections, setCollections] = useState();
  const [days, setDays] = useState();
  const [codes, setCode] = useState([]);

  useEffect(() => {
    const init = async () => {
      const myusername = window.localStorage.getItem("username");
      axios
        .post(`${url}/user/getuser`, {
          username: myusername,
        })
        .then((res) => {
          console.log(res.data);
          setCode(res.data.inviteCodes);
        });
    };
    init();
  }, []);

  return (
    <div className="p-t-2 ">
      <Grid container>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Sidebar url={url} />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10} className="pa-2">
          <div className="f-s-1_5 f-w-600  m-b-1">
            {" "}
            <span className="blue_clr">Link</span>.berry
          </div>

          <div className="m-t-1">
            Points are airdropped every Friday and will have Future uses in
            friend.tech
          </div>
          <div className="m-t-1">Your points</div>
          <div className="m-t-1 f-w-600 f-s-2">1</div>
          <div className="m-t-3">Invite a friend</div>

          {codes &&
            codes.map((res) => {
              return (
                <div className="m-y-2 d-f a-i-c">
                  <div className="m-r-7">{res}</div>
                  <div
                    className=""
                    onClick={() =>
                      navigator.clipboard.writeText(res).then(() => {
                        alert("copied");
                      })
                    }
                  >
                    <AiOutlineCopy />
                  </div>
                </div>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Link_berry;
