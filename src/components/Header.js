import { useContext, useState } from "react";
import { HEADER_BG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [logBtn, setLogBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gradient-to-r from-teal-400 to-yellow-200">
      <Link to="/">
        <img
          className="w-48 m-4 p-2"
          src="https://img.freepik.com/free-vector/cute-monkey-eating-banana-with-chopsticks-cartoon-vector-icon-illustration-animal-food-isolated_138676-8890.jpg?w=1380&t=st=1710331821~exp=1710332421~hmac=bd623f7c519972639f76ad6fc3586c5173e59fd2f4a4e144270ec03865238eb1"
        />
      </Link>
      <div className="logo-container"></div>
      <div className="p-4 m-4">
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

          <li className="p-4 m-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
