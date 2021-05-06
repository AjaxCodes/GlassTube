import React from "react";
import "./Search.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
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
      <hr />
      <h2 className="search__subheader">Latest from Ajax Codes </h2>
      <VideoRow
        views="1 view"
        subs="0"
        discription="A single-page React app designed, to show covid cases, cases 
        recovered, and Deaths around the world, you can find op to date information 
        of cases by region. Click on the country you would like to select, or use the 
        drop-down menu, and tract the direction of the curve in your country. All information
        is aggregated from Disease.sh, which comes directly from the CDC."
        
        timestamp="5 Days ago"
        channel="Ajax Codes"
        title="Covid Tracker"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <hr />
      <h2 className="search__subheader">More like Ajax Codes </h2>
      <VideoRow
        views="1 view"
        subs="0"
        discription="A single-page React app designed, to show covid cases, cases 
        recovered, and Deaths around the world, you can find op to date information 
        of cases by region. Click on the country you would like to select, or use the 
        drop-down menu, and tract the direction of the curve in your country. All information
        is aggregated from Disease.sh, which comes directly from the CDC."
        
        timestamp="5 Days ago"
        channel="Ajax Codes"
        title="Covid Tracker"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <VideoRow
        views="1 view"
        subs="0"
        discription="A single-page React app designed, to show covid cases, cases 
        recovered, and Deaths around the world, you can find op to date information 
        of cases by region. Click on the country you would like to select, or use the 
        drop-down menu, and tract the direction of the curve in your country. All information
        is aggregated from Disease.sh, which comes directly from the CDC."
        
        timestamp="5 Days ago"
        channel="Ajax Codes"
        title="Covid Tracker"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <VideoRow
        views="1 view"
        subs="0"
        discription="A single-page React app designed, to show covid cases, cases 
        recovered, and Deaths around the world, you can find op to date information 
        of cases by region. Click on the country you would like to select, or use the 
        drop-down menu, and tract the direction of the curve in your country. All information
        is aggregated from Disease.sh, which comes directly from the CDC."
        
        timestamp="5 Days ago"
        channel="Ajax Codes"
        title="Covid Tracker"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <VideoRow
        views="1 view"
        subs="0"
        discription="A single-page React app designed, to show covid cases, cases 
        recovered, and Deaths around the world, you can find op to date information 
        of cases by region. Click on the country you would like to select, or use the 
        drop-down menu, and tract the direction of the curve in your country. All information
        is aggregated from Disease.sh, which comes directly from the CDC."
        
        timestamp="5 Days ago"
        channel="Ajax Codes"
        title="Covid Tracker"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <VideoRow
        views="1 view"
        subs="0"
        discription="A single-page React app designed, to show covid cases, cases 
        recovered, and Deaths around the world, you can find op to date information 
        of cases by region. Click on the country you would like to select, or use the 
        drop-down menu, and tract the direction of the curve in your country. All information
        is aggregated from Disease.sh, which comes directly from the CDC."
        
        timestamp="5 Days ago"
        channel="Ajax Codes"
        title="Covid Tracker"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <VideoRow
        views="1 view"
        subs="0"
        discription="xx"
        timestamp="xx"
        channel="xx"
        title="Cxx"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
    </div>
  );
}

export default Search;
