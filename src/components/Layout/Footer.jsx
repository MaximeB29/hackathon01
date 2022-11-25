import React from "react";
import twt from "../../assets/logo/twitter_logo.png";
import inst from "../../assets/logo/instagram_logo.png";
import ytb from "../../assets/logo/youtube_logo.png";

function Footer() {
  return (
    <div>
      <div className="flex justify-between items-center h-24 p-2 bg-[#6caad9]">
        <p className="ml-5 font-Inter">©Find My Trip</p>
        <div className="flex items-center justify-center space-x-3.5 mr-5">
          <a href="https://youtube.com/">
            <img className="w-7" src={ytb} alt="Youtube logo" />
          </a>
          <a href="https://www.instagram.com/">
            <img className="w-7" src={inst} alt="Instagram logo" />
          </a>
          <a href="https://www.twitter.com/">
            <img className="w-7" src={twt} alt="Twitter logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
