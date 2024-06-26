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
    <div className="flex justify-center">
      <div className="w-full lg:w-1/2 mx-4 md:mx-10">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold flex justify-center mt-6 mb-4">
          Bill To Pay
        </span>
        <hr />
        <div className="">
          {allFoodItems.map((item, index) => (
            <CheckoutCard item={item} key={index} />
          ))}

          <hr />

          <div className="flex">
            <div className="flex justify-between w-full mt-2 text-md xl:text-lg 2xl:text-xl p-4">
              <span className="font-bold text-gray-800">Grand Total</span>
              <span className="font-bold text-gray-800">₹{totalAmount}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="rounded-lg font-bold text-white bg-[#00CCCC] m-8 p-4 w-60 h-auto hover:brightness-110 shadow-md hover:shadow-lg hover:shadow-gray-400 text-sm md:text-lg lg:text-xl">
              <Link to={"/thank-you"}>Pay and Place Order</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
