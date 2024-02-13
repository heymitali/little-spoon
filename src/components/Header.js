import { useState } from "react";
import { HEADER_BG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [logBtn, setLogBtn] = useState("login");

  return (
    <div className="header">
      <Link to="/">
        <img className="header-bg" src={HEADER_BG} />
      </Link>
      <div className="logo-container"></div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              logBtn === "login" ? setLogBtn("logout") : setLogBtn("login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
