import { Input } from "@material-ui/core";
import React from "react";
import "./Header.css";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <i class="fas fa-align-justify"></i>
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
          />
          <span className="menu">TV</span>
          <span className="menu">Movies</span>
          <span className="menu">Sports</span>
          <span className="menu">News</span>
          <span className="menu">Premium</span>
          <span className="menu">Disney+</span>
          <img
            src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
            alt=""
            className="kids"
          />
        </div>
        <div className="header-right">
          <Input placeholder="Search" className="search" />
          <i class="fas fa-search"></i>
          <button className="btn">SUBSCRIBE</button>
          <span className="log">Login</span>
        </div>
        <div className="search-media-block">
        <button className="btn">SUBSCRIBE</button>
        <FontAwesomeIcon icon={faSearch} className="Font-search"/>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
