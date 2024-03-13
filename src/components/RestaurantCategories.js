import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  let [showItems, setShowItems] = useState(false);

  const handleClick = () => setShowItems(!showItems);

  return (
    <div>
      <div className="w-6/12 text-l bg-gradient-to-l from-transparent via-gray-100 to-neutral-300 mx-auto my-6 p-4 rounded-lg ">
        <div
          onClick={handleClick}
          className=" font-bold m-1 p-4 flex justify-between cursor-pointer"
        >
          <span className="text-xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⇩</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
