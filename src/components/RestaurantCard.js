import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-2 h-[29rem] w-[25rem] rounded-lg border-2 overflow-hidden border-gray-300 shadow-lg hover:shadow-2xl">
      <img
        className="h-[20em] w-full object-cover overflow-hidden border-b-2"
        alt="res-img"
        src={IMAGE_BASE_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h3
            title={name}
            className="font-bold text-2xl w-[100%] pr-4 truncate"
          >
            {name}
          </h3>
          <h4 className="font-semibold w-16 mt-[6px]">{avgRating} ★</h4>
        </div>
        <div className="text-gray-600 text-[0.95rem] mt-2">
          <h4>Cost for two: {costForTwo}</h4>
          <h4 className="truncate">{cuisines.join(", ")}</h4>
          <h4>
            {areaName} | {deliveryTime} mins
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
