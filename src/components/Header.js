import { useState } from "react";
import { HEADER_BG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [logBtn, setLogBtn] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gradient-to-r from-lime-700">
      <Link to="/">
        <img
          className="bg-transparent"
          src="https://w7.pngwing.com/pngs/691/292/png-transparent-food-delivery-computer-icons-food-delivery-online-food-ordering-food-delivery-miscellaneous-angle-food-thumbnail.png"
        />
      </Link>
      <div className="logo-container"></div>
      <div className="p-4 ">
        <ul className="flex justify-between p-2 m-2">
          <li className="p-4 m-4">
            {onlineStatus ? "You are online!!" : "Ops! You seem offline"}
          </li>
          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 m-4">Cart</li>
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
