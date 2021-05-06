import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  discription,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__info">
        <h4>{channel}</h4>
        <p>{verified && <CheckCircleOutlinedIcon />}</p>
        <p>
          {subs} subscribers · {noOfVideos} videos
        </p>
        <p>{discription}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
