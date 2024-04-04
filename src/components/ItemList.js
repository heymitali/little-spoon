import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./../utils/cartSlice";

const imgUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

const ItemList = ({ items, resInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (foodInfo) => {
    dispatch(addItem({ resInfo, foodInfo }));
  };

  const handleRemoveItem = (foodInfo) => {
    dispatch(removeItem({ resInfo, foodInfo }));
  };

  return (
    <div className="bg-[#F5F5F5] border-t-2 border-t-gray-400">
      {items &&
        items.map((item) => (
          <div className="p-4 border-b-2 border-gray-300">
            <div className="flex justify-between" key={item.card.info.id}>
              <div className="flex flex-col w-[100%] p-3">
                <span className="text-xl font-bold">{item.card.info.name}</span>
                <span className="">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
                <p className="text-[1rem] mt-4 mb-4 text-gray-700 pr-6">
                  {item.card.info.description}
                </p>
                <div className="">
                  {cartItems[resInfo.name] &&
                    cartItems[resInfo.name][item.card.info.name] && (
                      <div className="w-36 mt-2 rounded-lg shadow-sm font-semibold bg-[#0b0b0bd2] text-white flex justify-around border-black border-[1px]">
                        <button
                          className="w-full pt-3 pb-3 pl-5 pr-3 hover:bg-[#ffffff] hover:text-black rounded-l-lg"
                          onClick={() => handleRemoveItem(item.card.info)}
                        >
                          &nbsp;-&nbsp;
                        </button>
                        <span className="w-10 pt-3 pb-3 pl-2 pr-4">
                          &nbsp;
                          {cartItems[resInfo.name][item.card.info.name]["qty"]}
                          &nbsp;
                        </span>
                        <button
                          className="w-full pt-3 pb-3 pl-2 pr-5 hover:bg-[#ffffff] hover:text-black rounded-r-lg"
                          onClick={() => handleAddItem(item.card.info)}
                        >
                          &nbsp;+&nbsp;
                        </button>
                      </div>
                    )}
                  {(!cartItems[resInfo.name] ||
                    !cartItems[resInfo.name][item.card.info.name]) && (
                    <button
                      className="w-36 mt-2 p-3 border-gray-400 rounded-lg shadow-sm font-semibold bg-[#0b0b0bd2] text-white border-[1px]"
                      onClick={() => handleAddItem(item.card.info)}
                    >
                      &nbsp;🍽️ Add Item&nbsp;
                    </button>
                  )}
                </div>
              </div>
              <img
                className="w-[24rem] h-[15rem] rounded-lg shadow-sm shadow-gray-700 m-2"
                src={
                  item.card.info.imageId
                    ? imgUrl + item.card.info.imageId
                    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                }
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
