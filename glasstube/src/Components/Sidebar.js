import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import OndemandVideoSharpIcon from "@material-ui/icons/OndemandVideoSharp";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import GetAppSharpIcon from "@material-ui/icons/GetAppSharp";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      </Link>

      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow  Icon={SubscriptionsSharpIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="Library" />
      <SidebarRow Icon={HistorySharpIcon} title="History" />
      <SidebarRow Icon={OndemandVideoSharpIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SidebarRow Icon={FavoriteSharpIcon} title="Liked Videos" />
      <SidebarRow Icon={GetAppSharpIcon} title="Show More" />
      <hr />
    </div>
  );
}

export default Sidebar;
