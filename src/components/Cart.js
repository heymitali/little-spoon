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
    <div className="">
      <div className="w-6/12 m-auto">
        <h1 className="font-bold underline text-center m-8 p-8 font-serif text-6xl">
          My Cart
        </h1>

        {Object.keys(cartItems).length > 0 && (
          <button
            className=" m-2 p-2 h-auto w-auto bold border-2 border-white rounded-xl bg-black text-white "
            onClick={handleClearCart}
          >
            Clear Cart 🗑️
          </button>
        )}
      </div>

      <div className="w-6/12 m-auto">
        <CartItemList items={cartItems} />
        {Object.keys(cartItems).length === 0 && (
          <h2 className="text-center p-2 m-2 text-lg">
            "Your cart is feeling a bit lonely! Add some delicious items to it."
            🛒🍔
          </h2>
        )}

        {Object.keys(cartItems).length > 0 && (
          <div className="flex justify-end">
            <Link to={"/checkout"}>
              <button className="border-2 border-solid rounded-lg text-white bg-lime-600 m-8 p-4 w-60 h-auto">
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
