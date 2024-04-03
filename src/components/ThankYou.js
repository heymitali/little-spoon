import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const ThankYou = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <div>
      <div className="flex justify-center m-4 p-2">
        <img src="https://media.tenor.com/Qwf1ljMGwrcAAAAj/cooking-whisk.gif"></img>
      </div>
      <div className="flex justify-center m-4 p-2">
        <h1 className="font-semibold text-xl">
          Hold tight!{" "}
          <span className="font-bold text-lime-500	">Your order is placed.</span>{" "}
          We're cooking up a storm of thanks for you and bringing right to your
          doorstep 😋
        </h1>
      </div>
    </div>
  );
};

export default ThankYou;
