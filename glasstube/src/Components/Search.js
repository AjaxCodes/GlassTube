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
        views="2 views"
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
        views="2 views"
        subs="0"
        discription="A frontend application comprising of a YouTube Clone , using Glassmorphism,
        material-UI, React.JS, React Hooks, and React-Router-dom"
        timestamp="1 day ago"
        channel="Ajax Codes"
        title="GlassTube"
        image="https://i.ytimg.com/vi/ooSa5dd12WE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCOw7IiuyvMAe-4iJ4x970kymtIQ"
      />
      <hr />
      <h2 className="search__subheader">More like Ajax Codes </h2>

      <VideoRow
        views="84"
        subs="100"
        discription="Team Death Match Ep_2 ASU GUILD TEAM -Buangke -Nasionalis OTHER TEAM -Leoparagon -Ajaxcode -Deathgvn Back Sound .."
        timestamp="4 years ago"
        channel="ASU GUILD"
        title="Arcane Legend PVP Two Player"
        image="https://i.ytimg.com/vi/asCnTVBsmno/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD94DtjeefBSFY2oxjlkh-5gKL-KA"
      />
      <VideoRow
        views="98"
        subs="20"
        discription="Read the Full tutorial Here: https://www.sourcecodester.com/php/11715/php-oop-login-and-sign-using-ajaxjquery.html For more ..."
        timestamp="1 week ago"
        channel="SourceCodester"
        title="creating a Login and signup page using Php/oop and ajax/jquery tutorial demo"
        image="https://i.ytimg.com/vi/-eIubAqTkhE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCfQ_YmCebZo1T-HCi0gIbRJ3IMgQ"
      />
      <VideoRow
        views="1.4k"
        subs="15.5k"
        discription="Crypto Corner Video Podcast #141 If you own a Ledger device (Nano S or Nano X or other model) you might be a target. Recently ..."
        timestamp="3 months ago"
        channel="OJ Jordan"
        title="Are you a target? is your ledger hacked?"
        image="https://i.ytimg.com/vi/sQBFaZEI7bI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9QaooUyMpoaRGIT6tMxDivXa7dAhttps://i.ytimg.com/vi/g1NixlW6jzE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDLD6Xa28dibVLTymDf0lkhhPzJXg"
      />
      <VideoRow
        views="1k"
        subs="132"
        discription="Here the link for ESP-01 https://drive.google.com/file/d/0B7Ckf2-Rx2HcTTk2WGlxUHpELTQ/view?usp=sharing Here the link for "
        timestamp="5 years ago"
        channel="Can Dogru"
        title="ESP-01 AJAX Dynamic Website is getting the data from Arduino"
        image="https://i.ytimg.com/vi/g1NixlW6jzE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDLD6Xa28dibVLTymDf0lkhhPzJXg"
      />
      <VideoRow
        views="1.1k"
        subs="900"
        discription="Bug bounty programs are put in place so that the security community can help vendors discover tricky and challenging application ..."
        timestamp="8 months ago"
        channel="SANS Offensive Opperations"
        title="Hunting logic attacks a peak at SEC552: bug bounties"
        image="https://i.ytimg.com/vi/hm426o9_g0k/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDmraL5UpgOM1-NlmH36Pt10-N09Q"
      />
      <VideoRow
        views="3.9k"
        subs="132"
        discription="You can watch variables (switches, temperatures, IR-sensors etc.) in realtime and in a browser without having to refresh it all the ..."
        timestamp="5 years ago"
        channel="Can Dogru"
        title="ESP8266 ESP-01 Dynamic Website - AJAX CODE"
        image="https://i.ytimg.com/vi/jVXihDZ1pJ8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0oJP-4TSU0b20Xh2ZrG2C0kq_2A"
      />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnj2AM2bFycvZdl5O0sHQJ73PK6ysnhMYDzQh6Tn=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="ASU GUILD"
        verified=""
        subs="17"
        noOfVideos={16}
        discription=""
      />
      <VideoRow
        views="1.4k"
        subs="15.5k"
        discription="Crypto Corner Video Podcast #141 If you own a Ledger device (Nano S or Nano X or other model) you might be a target. Recently ..."
        timestamp="3 months ago"
        channel="OJ Jordan"
        title="Are you a target? is your ledger hacked?"
        image="https://i.ytimg.com/vi/sQBFaZEI7bI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9QaooUyMpoaRGIT6tMxDivXa7dAhttps://i.ytimg.com/vi/g1NixlW6jzE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDLD6Xa28dibVLTymDf0lkhhPzJXg"
      />
      <VideoRow
        views="1k"
        subs="132"
        discription="Here the link for ESP-01 https://drive.google.com/file/d/0B7Ckf2-Rx2HcTTk2WGlxUHpELTQ/view?usp=sharing Here the link for "
        timestamp="5 years ago"
        channel="Can Dogru"
        title="ESP-01 AJAX Dynamic Website is getting the data from Arduino"
        image="https://i.ytimg.com/vi/g1NixlW6jzE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDLD6Xa28dibVLTymDf0lkhhPzJXg"
      />
      <VideoRow
        views="1.1k"
        subs="900"
        discription="Bug bounty programs are put in place so that the security community can help vendors discover tricky and challenging application ..."
        timestamp="8 months ago"
        channel="SANS Offensive Opperations"
        title="Hunting logic attacks a peak at SEC552: bug bounties"
        image="https://i.ytimg.com/vi/hm426o9_g0k/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDmraL5UpgOM1-NlmH36Pt10-N09Q"
      />
      <VideoRow
        views="1k"
        subs="132"
        discription="Here the link for ESP-01 https://drive.google.com/file/d/0B7Ckf2-Rx2HcTTk2WGlxUHpELTQ/view?usp=sharing Here the link for "
        timestamp="5 years ago"
        channel="Can Dogru"
        title="ESP-01 AJAX Dynamic Website is getting the data from Arduino"
        image="https://i.ytimg.com/vi/g1NixlW6jzE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDLD6Xa28dibVLTymDf0lkhhPzJXg"
      />
    </div>
  );
}

export default Search;
