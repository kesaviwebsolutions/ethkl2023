import React, { useState } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";

import Handshake from "../Image/hand_shake.png";
import { Grid } from "@mui/material";

import Dropdown from "react-bootstrap/Dropdown";

import linkedin from "../Image/linkedin.png";
import { useNavigate } from "react-router-dom";

function Home({login}) {
  const navigate = useNavigate();
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
      // Store the code in localStorage
      localStorage.setItem("linkedin_code", code);
      // Navigate to /linkedin
      navigate("/linkedin");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <>
      <div className="section">
        <div className="m-b-2 t-a-c ">
          <img src={Handshake} className="w-7" />
        </div>
        <div className="f-s-3_5 f-w-600 t-a-c m-b-1">
          {" "}
          <span className="blue_clr">Link</span> .berry
        </div>
        <div className="t-a-c m-b-2">Monetize your professional value</div>

        <div className="t-a-c ">
          <button
            className="b-r-40 bg_blue b-n c-w  p-x-2 p-y-0_5 "
            onClick={()=>login()}
          >
            <img src={linkedin} className="w-2" />
            &nbsp; Signup with Linkedin
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
