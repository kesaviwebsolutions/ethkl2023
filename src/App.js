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

const url = "http://localhost:8001";
const userName = "nikkrana";

function App() {
  useEffect(() => {
    const init = () => {};
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

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home login={login} />} />
          <Route path="/connectwallet" element={<Connect_wallet url={url} />} />
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
          <Route path="/mint" element={<Mint url={url} />} />
          <Route path="/form" element={<Form1 url={url} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
