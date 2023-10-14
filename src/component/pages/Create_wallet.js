import mint from "../Image/mint.png";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";
import blue_circle from "../Image/blue_circle.png";
import chakra from "../Image/chakra.png";

function Home() {
  return (
    <>
      <div className="max-w-35rem m-a">
        <div className="section">
          <div className=" m-b-3 w-100">
            <a href="/mint">
              <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 ">
                Create Wallet
              </button>
            </a>
          </div>

          <div className="t-a-c m-b-3">or</div>
          <div className="  w-100">
            <a href="/connectwallet">
              <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 ">
                Use Existing Wallet
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
