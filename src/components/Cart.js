import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-18">
      <div className="w-1/2 m-auto">
        <h1 className="font-semibold text-center mt-5 mb-2 text-4xl">Cart</h1>
        <hr className="mt-2 mb-4" />
        {Object.keys(cartItems).length > 0 && (
          <button
            className="float-right p-3 h-auto w-auto bold border-2 border-white rounded-xl bg-black text-white hover:bg-gray-700"
            onClick={handleClearCart}
          >
            Clear Cart 🗑️
          </button>
        )}
      </div>
      <div className="w-1/2 m-auto mt-14">
        <CartItemList items={cartItems} />
        {Object.keys(cartItems).length === 0 && (
          <h2 className="text-center mt-20 text-xl">
            "Your cart is feeling a bit lonely! Add some delicious items to it."
            🛒🍔
          </h2>
        )}

        {Object.keys(cartItems).length > 0 && (
          <div className="flex justify-end">
            <Link to={"/checkout"}>
              <button className="border-2 border-solid rounded-lg text-white bg-lime-600 m-8 p-4 w-60 h-auto hover:bg-lime-500 shadow-sm hover:shadow-lg">
                Checkout & Pay
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
