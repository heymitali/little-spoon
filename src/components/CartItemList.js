import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const imgUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (resName, foodInfo) => {
    const payload = { resInfo: { name: resName }, foodInfo };
    dispatch(addItem(payload));
  };

  const handleRemoveItem = (resName, foodInfo) => {
    const payload = { resInfo: { name: resName }, foodInfo };
    dispatch(removeItem(payload));
  };

  const restaurants = Object.keys(cartItems).filter(
    (resName) => Object.keys(cartItems[resName]).length > 0
  );

  return (
    <div className="border-t-2 border-t-gray-400">
      {restaurants.map((resName) => (
        <div>
          <span>{resName}</span>
          {Object.keys(cartItems[resName]).map((foodName) => {
            const foodItem = cartItems[resName][foodName];
            return (
              <div
                className="m-4 p-2 flex justify-between border-b-2 border-gray-500"
                // key={item.card.info.id}
              >
                <div>
                  <div className="flex justify-between p-1 font-bold">
                    <span className="text-[19px] ">{foodName}</span>
                    <span>
                      ₹
                      {foodItem.info.price / 100 ||
                        foodItem.info.defaultPrice / 100}
                    </span>
                  </div>
                  {/* <p className="text-xs">{item.card.info.description}</p> */}
                </div>
                <div className="w-40 p-2 m-4 ">
                  <div className="flex justify-evenly">
                    <img
                      className=" w-40 h-40 rounded-lg shadow-xl shadow-gray-700"
                      src={
                        foodItem.info.imageId
                          ? imgUrl + foodItem.info.imageId
                          : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                      }
                    />
                    <div>
                      <div className="w-32">
                        <button
                          onClick={() =>
                            handleRemoveItem(resName, foodItem.info)
                          }
                        >
                          &nbsp;-&nbsp;
                        </button>
                        <span>
                          &nbsp;
                          {foodItem["qty"]}
                          &nbsp;
                        </span>
                        <button
                          onClick={() => handleAddItem(resName, foodItem.info)}
                        >
                          &nbsp;+&nbsp;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
