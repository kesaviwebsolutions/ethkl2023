import React from "react";
import blue_circle from "../Image/blue_circle.png";
import home from "../Image/home.png";
import chat from "../Image/chat.png";
import watchlist from "../Image/watchlist.png";
import share from "../Image/share.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="br-1"> 
      <div className="d-f a-i-c pa-1 ">
        <div className="">
          <img src={blue_circle} className="w-2 m-r-1" />
        </div>
        <div className="">
          {" "}
          <div className="">John Doe</div> <div className="">0x697...087sg</div>
        </div>
      </div>
      <NavLink to="">
        <div className=" pa-1">
          {" "}
          <img src={home} className="w-2" />
          &nbsp;Home
        </div>
      </NavLink>
      <div className=" pa-1">
        {" "}
        <img src={chat} className="w-2" />
        &nbsp;Chats
      </div>
      <div className=" pa-1">
        {" "}
        <img src={watchlist} className="w-2" />
        &nbsp;Watchlist
      </div>
      <div className=" pa-1">
        {" "}
        <img src={share} className="w-2" />
        &nbsp;Share
      </div>
    </div>
  );
}

export default Sidebar;
