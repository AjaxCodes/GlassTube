import React from "react";
import "./Search.css";
import ChannelRow from "./ChannelRow";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";

function Search() {
  return (
    <div className="searchPage">
      <div className="search__filter">
        <TuneSharpIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      
      <ChannelRow
      image="https://yt3.ggpht.com/yti/ANoDKi4jwCrA7XM7qIHF3YAV5xAHSXMFv5O4QN1NjKNy=s88-c-k-c0x00ffffff-no-rj-mo"
      channel="Ajax Codes"
      verified="yes"
      subs="0"
      noOfVideos={2}
      discription="Live demos created by Aj Steinbacher"
      />
      <hr/>
      <h2 className="search__subheader">Latest from Ajax Codes </h2>
    </div>
  );
}

export default Search;
