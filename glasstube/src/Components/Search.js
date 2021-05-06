import React from "react";
import "./Search.css";
import ChannelRow from "./ChannelRow";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";

function Search() {
  return (
    <div className="searchPage">
      <div className="search__filter">
        <TuneSharpIcon />
        <h2>filter</h2>
      </div>
      <hr />
      <h2>Latest from </h2>
      <ChannelRow
      image="https://yt3.ggpht.com/yti/ANoDKi4jwCrA7XM7qIHF3YAV5xAHSXMFv5O4QN1NjKNy=s88-c-k-c0x00ffffff-no-rj-mo"
      channel="Ajax Codes"
      verified="yes"
      subs="0"
      noOfVideos={2}
      discription="Live demos created by Aj Steinbacher"
      />
    </div>
  );
}

export default Search;
