import React from "react";
import "./Header.scss";
import Location from "../images/location.png"
import Logo from "../images/adds.png"
import Search from "../images/search.png"
import Bookmark from "../images/bookmark.png"
import ProfileIcon from "../images/profileIcon.png"

const header = () => {
  return (
    <header>
      <nav className="MainNavbar">
        <ul>
            <li className="smallShrift"><a href="/">
              <img className="locIcon" src={Location} alt="" /> Tashkent</a></li>
            <li className="smallShrift"><a href="/">About Marketplace</a></li>
            <li className="smallShrift"><a href="/">Privacy Policy</a></li>
            <li className="smallShrift"><a href="/">Terms of use</a></li>
            <li className="smallShrift"><a href="/">Public offering</a></li>
        </ul>
        <ul>
            <li className="smallShrift blue"><a href="/">Interface language</a></li>
            <li className="smallShrift blue"><a href="/">Have a question?</a></li>
        </ul>
      </nav>
      <nav className="secondaryNav">
       <img className="logo" src={Logo} alt="" />
       <div className="search">
        <input type="text" placeholder="Search..." />
        <img src={Search} alt="" />
       </div>
       <div className="icons">
        <div className="icon">
            <div className="red-circle"></div>
            <img src={Bookmark} alt="" />
        </div>
        <div className="icon">
            <div className="red-circle"></div>
            <img src={ProfileIcon} alt="" />
        </div>
       </div>
      </nav>
    </header>
  );
};

export default header;
