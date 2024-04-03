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

  console.log("items in itemlist: ", items);

  return (
    <div className="border-t-2 border-t-gray-400">
      {items &&
        items.map((item) => (
          <div
            className="m-4 p-2 flex justify-between border-b-2 border-gray-500"
            key={item.card.info.id}
          >
            <div>
              <div className="flex justify-between p-1 font-bold">
                <span className="text-[19px] ">{item.card.info.name}</span>
                <span>
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-40 p-2 m-4 ">
              <div className="flex justify-evenly">
                <img
                  className=" w-40 h-40 rounded-lg shadow-xl shadow-gray-700"
                  src={
                    item.card.info.imageId
                      ? imgUrl + item.card.info.imageId
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                />
                <div>
                  {cartItems[resInfo.name] &&
                    cartItems[resInfo.name][item.card.info.name] && (
                      <div className="w-32">
                        <button
                          onClick={() => handleRemoveItem(item.card.info)}
                        >
                          &nbsp;-&nbsp;
                        </button>
                        <span>
                          &nbsp;
                          {cartItems[resInfo.name][item.card.info.name]["qty"]}
                          &nbsp;
                        </span>
                        <button onClick={() => handleAddItem(item.card.info)}>
                          &nbsp;+&nbsp;
                        </button>
                      </div>
                    )}
                  {(!cartItems[resInfo.name] ||
                    !cartItems[resInfo.name][item.card.info.name]) && (
                    <button
                      className="absolute  m-2 p-2 bg-gradient-to-tl from-neutral-100 via-white to-gray-100 border-gray-500 rounded-lg shadow-lg font-bold shadow-slate-950"
                      onClick={() => handleAddItem(item.card.info)}
                    >
                      &nbsp;ADD&nbsp;
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ItemList;
