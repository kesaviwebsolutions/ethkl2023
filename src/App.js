import Navbar from "./component/pages/Navbar";
import "./component/scss/Main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import "./App.scss";
import Form1 from "./component/pages/Form1";
import Page404 from "./component/pages/Page404";
import Invite from "./component/pages/Invite";
import Mint from "./component/pages/Mint";
import Linke from "./component/pages/Linke";
import Create_wallet from "./component/pages/Create_wallet";
import Connect_wallet from "./component/pages/Connect_wallet";
import Slice from "./component/pages/Slice";
import Berry from "./component/pages/Berry";
import Airdrop from "./component/pages/AirDrop";
import axios from "axios";
import { useEffect, useState } from "react";
import Link_berry from "./component/pages/Link_berry";
import Link_berry_profile from "./component/pages/Link_berry_profile";
import Callback from "./component/pages/Callback";
import Linkedin from "./component/pages/Linkedin";
import Key from "./component/pages/Key";

import {
  DissconnectWallet,
  MetaMasklogin,
  WalletConnect,
  getUserAddress,
} from "./component/web3/web3";
import { useStoreActions, useStoreState } from "easy-peasy";

import toast, { Toaster } from "react-hot-toast";
import { Backdrop, CircularProgress } from "@mui/material";

const notify = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);
const notifyMessage = (msg) =>
  toast(msg, {
    duration: 10000,
  });

const url = "http://localhost:8001";
const userName = "nikkrana";

function App() {
  const setUser = useStoreActions((action) => action.setUser);
  const user = useStoreState((state) => state.user);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      const user = window.localStorage.getItem("username");
      if (user) {
        Metamasklogin();
      }
    };
    init();
  }, []);

  const login = async (connections, follower, user_name, profile_url) => {
    const codes = [];
    for (let i = 0; i < 6; i++) {
      codes.push(generateUniqueAlphaNumeric(20));
    }
    axios
      .post(`${url}/join`, {
        userName: user_name,
        followers: follower,
        joinAt: new Date().getTime(),
        connections: connections,
        inviteCodes: codes,
        profileImage: profile_url,
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("username", user_name);
        setInterval(()=>{
          window.location.replace("/linkedin");
        },3000)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function generateUniqueAlphaNumeric(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  const WalletC = async () => {
    await WalletConnect();
    const add = await getUserAddress();
    console.log("wallet", add)
    connectwalletBackend(add);
    setUser(add);
  };

  const Metamasklogin = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "wallet");
    setUser(add);
  };

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    connectwalletBackend(add);
    console.log("wallet", add)
    window.localStorage.setItem("wallet", "wallet");
    setUser(add);
  };

  const Dissconnect = async () => {
    await DissconnectWallet();
    setUser(undefined);
    // setUserExist(false);
    window.localStorage.removeItem("wallet");
    window.location.replace("/");
  };

  const connectwalletBackend = async (add) => {
    try {
      const user = window.localStorage.getItem("username");
      await axios.post(`${url}/join/fillinguser`, {
          username: user,
          walletType: "external",
          wallet_Address: add,
        })
        .then((res) => {
          // window.localStorage.setItem("username", userName);
          setInterval(()=>{
            window.location.replace("/fundwallet");
          },3000)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleExtractClick = (url) => {
    const prefix = "https://www.linkedin.com/in/";
    if (url.startsWith(prefix)) {
      const id = url.slice(prefix.length).replace(/\/$/, ""); // This also removes the trailing slash
      return id;
    } else {
      return "Invalid LinkedIn URL";
    }
  };

  const handleSubmit = async (url) => {
    try {
      setOpen(true);
      const username = handleExtractClick(url);
      console.log("User", username, url);
      const response = await axios.post(`http://localhost:5000/get_profile`, {
        username: username,
        profile_uri: url,
      });
      if (response && response.data) {
        // Access response.data here
        console.log("Token:", response.data);
        login(
          response.data.connections,
          response.data.followers,
          response.data.username,
          response.data.profile_pic_url
        );
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
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home handleSubmit={handleSubmit} />} />
          <Route
            path="/connectwallet"
            element={
              <Connect_wallet url={url} Metamask={Metamask} WalletC={WalletC} />
            }
          />
          <Route path="/linkberry/:user" element={<Key url={url} />} />
          <Route path="/createwallet" element={<Create_wallet url={url} />} />
          <Route path="/airdrop" element={<Airdrop url={url} />} />
          <Route path="/slice" element={<Slice url={url} />} />
          <Route path="/berry" element={<Berry url={url} />} />
          <Route path="/linkberry" element={<Link_berry url={url} />} />
          <Route
            path="/linkberry/profile/:user"
            element={<Link_berry_profile url={url} />}
          />

          <Route path="/callback" element={<Callback />} />
          <Route path="/invite" element={<Invite url={url} />} />
          <Route path="/linkedin" element={<Linkedin url={url} />} />
          <Route path="/link" element={<Linke url={url} />} />
          <Route path="/fundwallet" element={<Mint url={url} />} />
          <Route path="/form" element={<Form1 url={url} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
    </>
  );
}

export default App;
