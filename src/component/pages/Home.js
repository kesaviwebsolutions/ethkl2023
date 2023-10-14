import React, { useState } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";

import Handshake from "../Image/hand_shake.png";
import { Backdrop, CircularProgress, Grid } from "@mui/material";

import Dropdown from "react-bootstrap/Dropdown";

import linkedin from "../Image/linkedin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);
const notifyMessage = (msg) =>
  toast(msg, {
    duration: 10000,
  });

function Home() {
  const [linkedins, setlinkedins] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [url, seturl] = useState("");

  const navigate = useNavigate();
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function extractLinkedInUsername(linkedinURL) {
    const prefix = "https://linkedin.com/in/";
    if (linkedinURL.startsWith(prefix)) {
      return linkedinURL.slice(prefix.length);
    }
    return linkedinURL; // If the URL doesn't start with the prefix, return the original URL.
  }

  const username = extractLinkedInUsername(url);

  const handleSubmit = async () => {
    try {
      setOpen(true);
      const response = await axios.post(`http://localhost:5000/get_profile`, {
        username: username,
        profile_uri: url,
      });

      if (response && response.data) {
        // Access response.data here
        console.log("Token:", response.data);
        localStorage.setItem("linkedin_login", JSON.stringify(response.data));
        notify("Successful Login");
        window.location.href = `/invite`;
        setOpen(false);
      } else {
        setOpen(false);
        console.error("Error: Response data is undefined or missing.");
      }
    } catch (error) {
      setOpen(false);
      // notifyError("Wrong Username or Password");
      console.error("Error:", error.response.data.message);
    }
  };

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
            // onClick={linkedInLogin}
            onClick={() => setlinkedins(true)}
          >
            <img src={linkedin} className="w-2" />
            &nbsp; Signup with Linkedin
          </button>
        </div>
        {linkedins ? (
          <div className="">
            <input
              type="text"
              className="w-100 b-1 max-w-35rem m-a m-t-3 b-r-40 d-b pa-0_5 t-a-c"
              placeholder="Please paste your linkedin url"
              value={url}
              onChange={(e) => seturl(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}

        {url ? (
          <div className="t-a-c m-t-2">
            {" "}
            <button
              className="b-r-40 bg_blue b-n c-w  w-15 p-y-0_5 "
              // onClick={linkedInLogin}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default Home;
