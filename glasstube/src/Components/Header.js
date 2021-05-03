import React from "react";
import "./Header.css";
import glasstubelogo from "../Images/glasstubelogo.png";
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp";
import YoutubeSearchedForSharpIcon from "@material-ui/icons/YoutubeSearchedForSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import ViewModuleSharpIcon from "@material-ui/icons/ViewModuleSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <MenuOpenSharpIcon />
      <img className="header__logo" src={glasstubelogo} alt="" />
      <input type="text" />
      <YoutubeSearchedForSharpIcon />
      <VideoCallSharpIcon />
      <ViewModuleSharpIcon />
      <NotificationsActiveSharpIcon />
      <Avatar />
    </div>
  );
}

export default Header;
