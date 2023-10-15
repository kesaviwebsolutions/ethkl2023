import berry from "../Image/berry.png";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";

function Home() {
  return (
    <>
      <div className="max-w-35rem m-a pa-2">
        <div className="section">
          <div className="m-b-2  ">
            <img src={berry} className="w-3" />
          </div>
          <div className=" f-w-600  m-b-1">link.Berry is in Beta </div>
          <div className=" m-b-2">
            Link.Berry is in beta! Thanks for being an early supporter and
            helping us test the app. We've given you three invites to share with
            friends. You can find these codes in the share tab. By using this
            app, you confirm that you are 18 years of age or older.
          </div>

          <div className=" m-t-3 w-100">
            <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 ">
              Start using the app
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
