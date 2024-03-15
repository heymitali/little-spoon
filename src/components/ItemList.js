import { useDispatch } from "react-redux";
import { addItem } from "./../utils/cartSlice";

const imgUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border-t-2 border-t-gray-400">
      {items.map((item) => (
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
                src={imgUrl + item.card.info.imageId}
              />
              <button
                className="absolute  m-2 p-2 bg-gradient-to-tl from-neutral-100 via-white to-gray-100 border-gray-500 rounded-lg shadow-lg font-bold shadow-slate-950"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
