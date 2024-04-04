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
    <div className="">
      {restaurants.map((resName) => (
        <div>
          <div className="m-2 mt-4 p-2 pl-1">
            <span className="text-2xl">{resName}</span>
          </div>
          <div className="rounded-lg border-[3px] border-gray-300">
            {Object.keys(cartItems[resName]).map((foodName) => {
              const foodItem = cartItems[resName][foodName];
              return (
                <div className="p-4 bg-[#F5F5F5] border-t-[0.5px] border-gray-300">
                  <div className="flex justify-between" key={foodItem.info.id}>
                    <div className="flex flex-col w-[100%] p-3">
                      <span className="text-xl font-bold">
                        {foodItem.info.name}
                      </span>
                      <span className="">
                        ₹
                        {foodItem.info.price / 100 ||
                          foodItem.info.defaultPrice / 100}
                      </span>
                      <p className="text-[1rem] mt-4 mb-4 text-gray-700 pr-6">
                        {foodItem.info.description}
                      </p>
                      <div className="">
                        <div className="w-36 mt-2 rounded-lg shadow-sm font-semibold bg-[#0b0b0bd2] text-white flex justify-around border-black border-[1px]">
                          <button
                            className="w-full pt-3 pb-3 pl-5 pr-3 hover:bg-[#ffffff] hover:text-black rounded-l-lg"
                            onClick={() =>
                              handleRemoveItem(resName, foodItem.info)
                            }
                          >
                            &nbsp;-&nbsp;
                          </button>
                          <span className="w-10 pt-3 pb-3 pl-2 pr-4">
                            &nbsp;
                            {cartItems[resName][foodItem.info.name]["qty"]}
                            &nbsp;
                          </span>
                          <button
                            className="w-full pt-3 pb-3 pl-2 pr-5 hover:bg-[#ffffff] hover:text-black rounded-r-lg"
                            onClick={() =>
                              handleAddItem(resName, foodItem.info)
                            }
                          >
                            &nbsp;+&nbsp;
                          </button>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[24rem] h-[15rem] rounded-lg shadow-sm shadow-gray-700 m-2"
                      src={
                        foodItem.info.imageId
                          ? imgUrl + foodItem.info.imageId
                          : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
