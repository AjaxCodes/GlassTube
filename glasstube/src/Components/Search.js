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
      image="https://www.youtube.com/channel/UCRM3UBEgpiw3CzL4C9Z7CEA"
      channel="Ajax Codes"
      verified=""
      subs=""
      noOfVideos={2}
      discription="Live demos created by Aj Steinbacher"
      />
    </div>
  );
}

export default Search;
