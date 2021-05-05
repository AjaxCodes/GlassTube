import React from "react";
import "./RecomendedVideos.css";
import Video from "./Video";

function RecomendedVideos() {
  return (
    <div className="recomendedVideos">
      <h2>Recomended</h2>
      <div className="recomendedVideos__videos">
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>

      </div>
    </div>
  );
}

export default RecomendedVideos;
