import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [logBtn, setLogBtn] = useState("login");
  const { loggedInUser, setUsername } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const calculateTotalItems = () => {
    const resNames = Object.keys(cartItems);
    let total = 0;
    for (const resName of resNames) {
      const foodItems = Object.keys(cartItems[resName]);

      for (const foodItem of foodItems) {
        total += cartItems[resName][foodItem]["qty"];
      }
    }
    return total;
  };

  return (
    <div className="flex justify-between  shadow-lg shadow-gray-700">
      <div className="w-max h-max bg-black bg-opacity-50"></div>
      <Link to="/">
        <div className="flex justify-between overflow-hidden">
          <img
            className="w-40 m-4 p-2 rounded-3xl scale-150 overflow-hidden"
            src="https://littlespoonshop.myshopify.com/cdn/shop/files/Little_spoon_logo_low_RES_Black_302649e5-7229-4528-9622-d70dbc80c253.jpg?v=1682992278"
          />
          <h1 className="m-auto p-4 text-6xl font-bold text-white">
            Little Spoon
          </h1>
        </div>
      </Link>

      <div className="flex justify-center m-2">
        <ul className="flex justify-between p-2 m-2">
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
            <Link to={"/cart"}>🛒 ({calculateTotalItems()})</Link>
          </li>
          <li>
            {loggedInUser === "User" && (
              <input placeholder="Username" className=""></input>
            )}
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
