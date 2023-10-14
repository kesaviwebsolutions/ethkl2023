import React from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
import meta from "../Image/meta.png";
import { Grid } from "@mui/material";

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
          <div className="">
            <div className="m-b-2 t-a-c ">
              <img src={meta} className="b-r-50 w-15  " />
            </div>
            <div className="t-a-c f-s-1_5 f-w-600 m-b-1">
              Arun Yadav (Arrnaya)
            </div>

           
            <div className="max-w-50rem m-a">
              {" "}
           

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
