import React from "react";
import blue_circle from "../Image/blue_circle.png";
import home from "../Image/home.png";
import chat from "../Image/chat.png";
import watchlist from "../Image/watchlist.png";
import share from "../Image/share.png";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="p-r-1">
      <Link to="/linkberry/profile">
        <div className="d-f a-i-c p-l-1 p-b-1 a-i-c d-f ">
          <div className="">
            <img src={blue_circle} className="w-2 m-r-1" />
          </div>
          <div className="">
            {" "}
            <div className="">John Doe</div>{" "}
            <div className="">0x697...087sg</div>
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
      <div className=" pa-1 a-i-c d-f c-p">
        {" "}
        <img src={share} className="w-2 m-r-1" />
        Share
      </div>
    </div>
  );
}

export default Sidebar;
