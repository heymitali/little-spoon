import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [logBtn, setLogBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gradient-to-r  shadow-lg shadow-gray-700 from-teal-400 to-yellow-200">
      <Link to="/">
        <div className="flex justify-between">
          <img
            className="w-40 m-4 p-2 rounded-3xl"
            src="https://img.freepik.com/free-vector/cute-monkey-eating-banana-with-chopsticks-cartoon-vector-icon-illustration-animal-food-isolated_138676-8890.jpg?w=1380&t=st=1710331821~exp=1710332421~hmac=bd623f7c519972639f76ad6fc3586c5173e59fd2f4a4e144270ec03865238eb1"
          />
          <h1 className="m-auto p-4 text-6xl font-bold text-white">
            Monkey Meals
          </h1>
        </div>
      </Link>

      <div className="flex justify-center m-2">
        <ul className="flex justify-between p-2 m-2">
          <li className="p-2 m-2">
            {onlineStatus ? "You are online!!" : "Ops! You seem offline"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to={"/cart"}>🛒 ({cartItems.length})</Link>
          </li>
          <li>
            <button
              className="p-2 m-2 "
              onClick={() => {
                logBtn === "login" ? setLogBtn("logout") : setLogBtn("login");
              }}
            >
              {logBtn}
            </button>
          </li>
          <li className="p-2 m-2 font-bold">👤 {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
