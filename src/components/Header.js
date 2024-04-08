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
    <div className="sticky top-0 z-50 lg:h-auto md:h-20 sm:h-30 sm:p-4 md:p-0 lg:p-0 p-2 flex justify-around shadow-md shadow-gray-200 align-middle bg-white w-screen overflow-hidden">
      <Link to="/">
        <div className="flex items-center h-[100%] md:p-4">
          <img
            className="lg:h-[4.5rem] md:h-14 sm:h-12 h-10 w-auto"
            src="https://littlespoonshop.myshopify.com/cdn/shop/files/Little_spoon_logo_low_RES_Black_302649e5-7229-4528-9622-d70dbc80c253.jpg?v=1682992278"
          />
        </div>
      </Link>

      <div className="flex justify-center items-center md:m-2">
        <ul className="flex justify-between md:p-2 md:pt-2 md:m-2 pt-2 sm:pt-auto">
          <Link to="/">
            <li className="md:p-1 md:m-2 sm:p-1 sm:mr-1 lg:text-lg sm:text-sm text-sm font-semibold hover:text-[#00CCCC] invisible w-0 sm:visible sm:w-auto">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="md:p-1 md:m-2 sm:p-1 sm:mx-1 p-0 lg:text-lg sm:text-sm text-xs mx-1 font-semibold hover:text-[#00CCCC]">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="md:p-1 md:m-2 sm:p-1 sm:mx-1 p-0 lg:text-lg sm:text-sm text-xs mx-1 font-semibold hover:text-[#00CCCC]">
              Contact Us
            </li>
          </Link>
          <Link to={"/cart"}>
            <li className="md:p-1 md:m-2 sm:p-1 sm:mx-1 p-0 lg:text-lg sm:text-sm text-xs mx-1 font-semibold hover:text-[#00CCCC]">
              🛒 Cart ({calculateTotalItems()})
            </li>
          </Link>

          <li className="md:p-1 md:m-2 sm:p-1 sm:ml-1 lg:text-lg sm:text-sm text-xs font-semibold invisible w-0 sm:visible sm:w-auto">
            <img
              src={USER_IMAGE}
              className="float-left lg:h-5 lg:mt-1 lg:mr-2 md:h-4 md:mt-[2px] md:mr-1 sm:h-4 sm:mt-[2px] sm:mr-1"
            />
            <span className="">{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
