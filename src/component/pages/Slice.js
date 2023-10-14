import slice from "../Image/slice.png";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";

function Home() {
  return (
    <>
      <div className="max-w-35rem m-a">
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
            <button className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 ">
              Buy Slice for $0
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
