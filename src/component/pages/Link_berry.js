import React from "react";
import Sidebar from "./Sidebar";
import Tab from "react-bootstrap/Tab";
import blue_circle from "../Image/blue_circle.png";
import Tabs from "react-bootstrap/Tabs";
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
            </Tab>
            <Tab eventKey="profile" title="Global">
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
              <div className="">
                <div className="d-f a-i-c">
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
            </Tab>
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
}

export default Link_berry;
