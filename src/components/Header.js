import { useState } from "react";
import { HEADER_BG } from "../utils/constants";

const Header = () => {
  let [logBtn, setLogBtn] = useState("login");

  return (
    <div className="header">
      <img className="header-bg" src={HEADER_BG} />
      <div className="logo-container"></div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
