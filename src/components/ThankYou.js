import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const ThankYou = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-screen h-screen object-cover -z-10 fixed"
      />

      <div className="flex justify-center">
        <div className="backdrop-blur-lg w-auto lg:w-2/3 mx-4 md:mx-8 lg:mx-48 lg:my-20 lg:p-8 h-auto absolute -z-5 rounded-3xl mt-20 2xl:mt-44">
          <div className="float-right m-3 sm:m-10">
            <img
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-28 sm:w-44 md:w-48 lg:w-56 xl:w-80 object-cover rounded-full"
            />
          </div>

          <div className="flex justify-center m-auto">
            <div className="z-10 p-5 sm:p-5 md:p-6 xl:mx-10 2xl:mx-16 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              <h1 className="m-2">
                Hold tight!{" "}
                <span className="font-bold text-lime-600">
                  Your order is placed.
                  <br />
                </span>
                We're cooking up a storm of thanks for you and bringing right to
                your doorstep 😋
              </h1>

              <br />
              <h1 className="">
                Congratulations! You've just unlocked the 'Professional Couch
                Potato' achievement. 🥔 Enjoy your meal!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
