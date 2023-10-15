import invite from "../Image/invite.png";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import linkedin from "../Image/linkedin.png";
import right_arrow from "../Image/right_arrow.png";
import axios from "axios";

function Home({ url }) {
  const [code, setCode] = useState();

  const invitationCode = async () => {
    try {
      axios
        .post(`${url}/join/findcode`, {
          code: code,
        })
        .then((res) => {
          console.log(res);
          window.location.replace("/createwallet");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="max-w-35rem m-a pa-2">
        <div className="section">
          <div className="m-b-2  ">
            <img src={invite} className="w-3" />
          </div>
          <div className=" f-w-600  m-b-1">Got an invite code? </div>
          <div className=" m-b-2">
            Link.berry is currently in beta. Get an invite from an existing user
            to sign up
          </div>
          <div className="">
            <input
              type="text"
              onChange={(e) => setCode(e.target.value)}
              className="b-1 b-r-40 b-c-t w-100 pa-0_5 t-a-c"
            />
          </div>
          <div className=" m-t-3 w-100">
            <button
              className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 w-100 "
              onClick={() => invitationCode()}
            >
              Proceed
            </button>
          </div>
          {/* <div className=" m-t-2 t-a-c c-p ">
            Logout &nbsp; <img src={right_arrow} className="w-1 c-p" />{" "}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
