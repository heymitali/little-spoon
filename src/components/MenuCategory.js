import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, resInfo }) => {
  let [showItems, setShowItems] = useState(false);
  const handleClick = () => setShowItems(!showItems);

  return (
    <div>
      <div className="w-100% md:w-[100%] lg:w-2/3 2xl:w-[62%] text-lg mx-auto my-4 pt-2 pb-1 rounded-lg bg-[#E0E0E0]">
        <div
          onClick={handleClick}
          className=" font-bold m-1 sm:p-2 lg:p-3 2xl:p-4 p-1 flex justify-between cursor-pointer"
        >
          <span className="md:text-lg lg:text-lg 2xl:text-xl text-sm">
            {data.title} ({data.itemCards.length})
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} resInfo={resInfo} />}
      </div>
    </div>
  );
};

export default MenuCategory;
