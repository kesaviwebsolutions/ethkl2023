import React from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";

function Link_berry() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="p-t-2">
      <Grid container>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <div className="f-s-1_5 f-w-600  m-b-1">
            {" "}
            <span className="blue_clr">Link</span>.berry
          </div>

          <div className="m-t-1">
            Points are airdropped every Friday and will have Future uses in
            friend.tech
          </div>
          <div className="m-t-1">Your points</div>
          <div className="m-t-1 f-w-600 f-s-2">8</div>
          <div className="m-t-3">Invite a friend</div>
          <div className="m-y-2 d-f a-i-c">
            <div className="m-r-7">ft-66gzzz8n</div>
            <div className="">
              <AiOutlineCopy />
            </div>
          </div>
          <div className="m-y-2 d-f a-i-c">
            <div className="m-r-7">ft-66gzzz8n</div>
            <div className="">
              <AiOutlineCopy />
            </div>
          </div>
          <div className="m-y-2 d-f a-i-c">
            <div className="m-r-7">ft-66gzzz8n</div>
            <div className="">
              <AiOutlineCopy />
            </div>
          </div>
          <div className="m-y-2 d-f a-i-c">
            <div className="m-r-7">ft-66gzzz8n</div>
            <div className="">
              <AiOutlineCopy />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Link_berry;
