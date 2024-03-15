import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";
import { useState } from "react";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const deliveryFee = 50;
  const taxes = 35;
  const [total, setTotal] = useState(0);
  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <CheckoutCard item={item} />
        ))}
        {/* {cartItems.map((item) => {
          setTotal(total + item.card.info.price / 100);
        })} */}
        {/* {setTotal(total + taxes + deliveryFee)}; */}
        <div className="flex justify-center ">
          <div className="flex justify-between w-3/12 border-t-2  border-black">
            <span className="font-extrabold">To Pay</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
