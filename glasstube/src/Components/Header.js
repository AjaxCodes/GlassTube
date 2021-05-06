import React, { useState } from "react";
import "./Header.css";
import glasstubelogo from "../Images/glasstubelogo.png";
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp";
import YoutubeSearchedForSharpIcon from "@material-ui/icons/YoutubeSearchedForSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import ViewModuleSharpIcon from "@material-ui/icons/ViewModuleSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuOpenSharpIcon className="header__burger" />
        <Link to="/">
          <img className="header__logo" src={glasstubelogo} alt="" />
        </Link>
      </div>
      <div className="header__center">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <YoutubeSearchedForSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <ViewModuleSharpIcon className="header__icon" />
        <NotificationsActiveSharpIcon className="header__icon" />
        <Avatar
          alt=""
          src="https://yt3.ggpht.com/yti/ANoDKi4jwCrA7XM7qIHF3YAV5xAHSXMFv5O4QN1NjKNy=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
