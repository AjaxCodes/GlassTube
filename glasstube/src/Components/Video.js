import React from "react";
import "./Video.css";
import Avatar from "@material-ui/core/Avatar";

function Video({ image, title, channel, views,timestamp, channelImage }) {
  return (
    <div className="video">
      <img className="video_thumbnail" src={image} alt="" />
      <div className="video_info">
        <Avatar className="video_avatar" alt={channel} src={channelImage}/>
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} · {timestamp}</p>
        </div>

      </div>
    </div>
  );
}

export default Video;
