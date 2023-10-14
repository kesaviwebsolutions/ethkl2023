import React, { useEffect, useState } from "react";
import blue_circle from "../Image/blue_circle.png";
import home from "../Image/home.png";
import chat from "../Image/chat.png";
import watchlist from "../Image/watchlist.png";
import share from "../Image/share.png";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function Sidebar({ url }) {
  const [user, setUser] = useState();
  const [username, setUserName] = useState();

  useEffect(() => {
    const init = async () => {
      const user = window.localStorage.getItem("username");
      axios
        .post(`${url}/user/getuser`, {
          username: user,
        })
        .then(async (res) => {
          setUserName(user);
          setUser(res.data.wallet_Address);
        });
    };
    init();
  }, []);

  const sliceAddresss = (addresss) => {
    try {
      if (typeof addresss === "string") {
        const add = addresss.slice(0, 5);
        const seon = addresss.slice(36);
        return add + "..." + seon;
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="br-1 m-q-b-d-n p-r-2">
        <Link to={`/linkberry/profile/${username}`}>
          <div className="d-f a-i-c pa-1 ">
            <div className="">
              <img src={blue_circle} className="w-2 m-r-1" />
            </div>
            <div className="">
              {" "}
              <div className="">{username}</div>{" "}
              <div className="">{sliceAddresss(user)}</div>
            </div>
          </div>
        </Link>
        <NavLink to="/linkberry">
          <div className=" pa-1 a-i-c d-f c-p">
            {" "}
            <img src={home} className="w-2 m-r-1" />
            Home
          </div>
        </NavLink>
        <div className=" pa-1 a-i-c d-f c-p">
          {" "}
          <img src={chat} className="w-2 m-r-1" />
          Chats
        </div>
        <div className=" pa-1 a-i-c d-f c-p">
          {" "}
          <img src={watchlist} className="w-2 m-r-1" />
          Watchlist
        </div>
        <NavLink to="/airdrop">
          <div className=" pa-1 a-i-c d-f c-p">
            {" "}
            <img src={share} className="w-2 m-r-1" />
            Share
          </div>
        </NavLink>
      </div>
      <div className="ps-f b-0 w-100 m-q-a-d-n">
        <div className="d-f j-c-s-b a-i-c w-100 p-x-0_5 p-y-1 ">
          <Link to="/linkberry">
            <div className="">
              <img src={home} className="w-5" />
            </div>
          </Link>
          <div className="">
            <img src={chat} className="w-5" />
          </div>
          <div className="">
            <img src={watchlist} className="w-4" />
          </div>
          <Link to="/airdrop">
            <div className="">
              <img src={share} className="w-5" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
