import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const resNames = Object.keys(cartItems);
  let totalAmount = 0;
  const allFoodItems = [];

  for (const resName of resNames) {
    const foodItems = Object.keys(cartItems[resName]);

    for (const foodItem of foodItems) {
      allFoodItems.push(cartItems[resName][foodItem]);
      const foodInfo = cartItems[resName][foodItem]["info"];
      totalAmount +=
        (foodInfo.price / 100 || foodInfo.defaultPrice / 100) *
        cartItems[resName][foodItem]["qty"];
    }
  }

  return (
    <div>
      <div>
        {allFoodItems.map((item) => (
          <CheckoutCard item={item} />
        ))}

        <div className="flex justify-center ">
          <div className="flex justify-between w-6/12 border-t-2  border-black">
            <span className="font-extrabold">To Pay</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-solid rounded-lg font-bold text-white bg-lime-600 m-8 p-4 w-60 h-auto">
            <Link to={"/thank-you"}>Pay and Place Order</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
