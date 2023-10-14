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

function App() {
  return (
    <div className="container-kws">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linkedin" element={<Invite />} />
          <Route path="/connect_wallet" element={<Connect_wallet />} />
          <Route path="/link" element={<Linke />} />
          <Route path="/create_wallet" element={<Create_wallet />} />
          <Route path="/slice" element={<Slice />} />
          <Route path="/berry" element={<Berry />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
