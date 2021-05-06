import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  discription,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} ·<span className="videoRow__wholeSubs"><span className="videoRow_subs">{subs} </span>subscribers</span> 
          {views} · {timestamp}{" "}
        </p>
        <p className="videoRow_discription">{discription}</p>
      </div>
    </div>
  );
}

export default VideoRow;
