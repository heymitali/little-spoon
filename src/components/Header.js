import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { USER_IMAGE } from "../utils/constants";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

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
    <div className="sticky top-0 z-50 h-30 flex justify-around shadow-md shadow-gray-200 align-middle bg-white">
      <Link to="/">
        <div className="flex items-center h-[100%]">
          <img
            className="h-16 rounded-3xl"
            src="https://littlespoonshop.myshopify.com/cdn/shop/files/Little_spoon_logo_low_RES_Black_302649e5-7229-4528-9622-d70dbc80c253.jpg?v=1682992278"
          />
        </div>
      </Link>

      <div className="flex justify-center items-center m-2">
        <ul className="flex justify-between p-2 m-2">
          <Link to="/">
            <li className="p-1 m-2 text-lg font-semibold hover:text-[#00CCCC]">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="p-1 m-2 text-lg font-semibold hover:text-[#00CCCC]">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="p-1 m-2 text-lg font-semibold hover:text-[#00CCCC]">
              Contact Us
            </li>
          </Link>
          <Link to={"/cart"}>
            <li className="p-1 m-2 text-lg font-semibold hover:text-[#00CCCC]">
              🛒 Cart ({calculateTotalItems()})
            </li>
          </Link>

          <li className="p-1 m-2 text-lg font-semibold">
            <img src={USER_IMAGE} className="h-5 float-left mt-1 mr-2" />
            <span className="">{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
