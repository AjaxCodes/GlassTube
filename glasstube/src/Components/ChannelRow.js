import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";

function ChannelRow({ image, channel, verified, subs, noOfVideos, discription, }) {
  return (
    <div className="channelRow">
      <img className="channelRow__thumbnail" src={image} alt="" />
      <div className="channelRow__info">
        <h4>
          {channel}
          {verified}
        </h4>

        <p>
          {subs} · {noOfVideos}
        </p>
        <p>{discription}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
