import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // const deliveryFee = 50;
  // const taxes = 35;

  let total = 0;
  cartItems.forEach((item) => {
    total += item.card.info.price / 100 || item.card.info.defaultPrice / 100;
  });

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <CheckoutCard item={item} />
        ))}

        <div className="flex justify-center ">
          <div className="flex justify-between w-6/12 border-t-2  border-black">
            <span className="font-extrabold">To Pay</span>
            <span>₹{total}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-solid rounded-lg font-bold text-white bg-lime-600 m-8 p-4 w-60 h-auto">
            <Link to={"/thankYou"}>Pay and Place Order</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
