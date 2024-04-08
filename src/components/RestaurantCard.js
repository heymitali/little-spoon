import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="lg:m-2 lg:h-[29rem] md:h-[20rem] sm:h-[20rem] lg:w-[25rem] md:m-2 md:w-[16rem] sm:w-[15rem] rounded-lg lg:border-2 overflow-hidden border-gray-300 shadow-lg hover:shadow-2xl sm:my-2 md:my-3 lg:my-4">
      <img
        className="lg:h-[20rem] sm:h-[12rem] w-full object-cover overflow-hidden lg:border-b-2 md:border-b-1"
        alt="res-img"
        src={IMAGE_BASE_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h3
            title={name}
            className="font-bold lg:text-2xl md:text-lg sm:text-lg w-[100%] sm:pr-2 lg:pr-4 truncate"
          >
            {name}
          </h3>
          <h4 className="font-semibold lg:w-24 md:w-20 sm:w-16 lg:mt-[4px] md:mt-[2px] lg:text-xl md:text-md sm:text-md sm:mt-[2px]">
            {avgRating} ★
          </h4>
        </div>
        <div className="text-gray-600 lg:mt-2 md:mt-[2px] sm:mt-[2px]">
          <h4 className="font-bold lg:text-[0.98rem] md:text-[0.84rem] sm:text-[0.84rem]">
            Cost for two: {costForTwo}
          </h4>
          <h4 className="truncate lg:text-[0.95rem] md:text-[0.76rem] sm:text-[0.77rem]">
            {cuisines.join(", ")}
          </h4>
          <h4 className="lg:text-[0.90rem] md:text-[0.74rem] sm:text-[0.75rem]">
            {areaName} | {deliveryTime} mins
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
