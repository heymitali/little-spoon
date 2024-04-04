import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, resInfo }) => {
  let [showItems, setShowItems] = useState(false);
  const handleClick = () => setShowItems(!showItems);

  return (
    <div>
      <div className="w-2/3 text-lg mx-auto my-4 pt-2 pb-1 rounded-lg bg-[#E0E0E0]">
        <div
          onClick={handleClick}
          className=" font-bold m-1 p-4 flex justify-between cursor-pointer"
        >
          <span className="text-xl">
            {data.title} ({data.itemCards.length})
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} resInfo={resInfo} />}
      </div>
    </div>
  );
};

export default MenuCategory;
