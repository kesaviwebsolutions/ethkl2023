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
import axios from "axios";
import { useEffect } from "react";
import Link_berry from "./component/pages/Link_berry";
import Link_berry_profile from "./component/pages/Link_berry_profile";

import { DissconnectWallet, MetaMasklogin, WalletConnect, getUserAddress } from "./component/web3/web3";
import { useStoreActions, useStoreState } from "easy-peasy";
const url = "http://localhost:8001";
const userName = "nikkrana";

function App() {

  const setUser = useStoreActions((action) => action.setUser);
  const user = useStoreState((state) => state.user);


  useEffect(() => {
    const init = async() => {

    };
    init();
  }, []);

  const login = async () => {
    const codes = [];
    for (let i = 0; i < 6; i++) {
      codes.push(generateUniqueAlphaNumeric(20));
    }
    axios
      .post(`${url}/join`, {
        userName: userName,
        followers: 10,
        joinAt: new Date().getTime(),
        connections: 10,
        inviteCodes: codes,
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("username", userName);
        window.location.replace("/linkedin");
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
    connectwalletBackend(add)
    setUser(add);
  };

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    connectwalletBackend(add)
    window.localStorage.setItem("wallet", "wallet");
    setUser(add);
  };

  const Dissconnect = async () => {
    await DissconnectWallet();
    setUser(undefined);
    setUserExist(false);
    window.localStorage.removeItem("wallet");
    window.location.replace("/");
  };

  const connectwalletBackend = async(add)=>{
    try {
      const user = window.localStorage.getItem("username")
      axios.post(`${url}/join/fillinguser`, {
        username:user,
        walletType:"external",
        wallet_Address:add,
      })
      .then((res) => {
        // window.localStorage.setItem("username", userName);
        window.location.replace("/fundwallet");
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home login={login} />} />
          <Route path="/connectwallet" element={<Connect_wallet url={url} Metamask={Metamask} WalletC={WalletC}/>} />
          <Route path="/createwallet" element={<Create_wallet url={url} />} />
          <Route path="/slice" element={<Slice url={url} />} />
          <Route path="/berry" element={<Berry url={url} />} />
          <Route path="/linkberry" element={<Link_berry url={url} />} />
          <Route
            path="/linkberry/profile"
            element={<Link_berry_profile url={url} />}
          />
          <Route path="/linkedin" element={<Invite url={url} />} />
          <Route path="/link" element={<Linke url={url} />} />
          <Route path="/fundwallet" element={<Mint url={url} />} />
          <Route path="/form" element={<Form1 url={url} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
