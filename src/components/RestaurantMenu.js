import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantMenu = () => {
  let { resId } = useParams();
  const fetchedData = useRestaurantMenu(resId);
  const restaurantMenu = fetchedData[0];
  const restaurantInfo = fetchedData[1];
  const restImage = IMAGE_BASE_URL + restaurantInfo.cloudinaryImageId;

  if (restaurantMenu === null || restaurantMenu?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="resMenueContainer">
      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] md:w-[88%] lg:w-[60%] flex flex-col justify-center lg:m-8 lg:p-6 md:m-6 md:p-6 sm:m-5 sm:p-5 xl:m-10 xl:p-6 2xl:m-14 2xl:p-8 m-4 p-4 border-[1.5px] border-gray-600 rounded-md bg-red-500 sm:bg-yellow-400 md:bg-purple-400 lg:bg-green-500 xl:bg-pink-400 2xl:bg-blue-500">
          <img
            src={restImage}
            className="h-[8rem] sm:h-[15rem] md:h-[15rem] xl:h-[16rem] 2xl:h-[20rem] w-full object-cover overflow-hidden z-0 relative rounded-sm"
          />
          <div className="">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl p-2 border-b-2">
              {restaurantInfo.name}
            </h1>
          </div>
          <div className="px-2 mt-3 text-md sm:text-[19px] md:text-[20px] xl:text-[21px] 2xl:text-2xl">
            <span className="font-semibold pt-2 text-gray-600">
              {restaurantInfo.cuisines.join(", ")}
            </span>
            <span className="">{" | "}</span>
            <span className="font-semibold mb-2 pb-2 text-gray-400">
              {restaurantInfo.locality + ", " + restaurantInfo.city}
            </span>
          </div>
          <div className="px-2 float-left mt-2 text-sm sm:text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-xl">
            <h3>{restaurantInfo.costForTwoMessage}</h3>
          </div>
          <div className="px-2 float-right mt-2 text-sm sm:text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-xl">
            <h3>
              {"★ " +
                restaurantInfo.avgRatingString +
                " (" +
                restaurantInfo.totalRatingsString +
                ")"}
            </h3>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-16 lg:px-10 mt-4 mb-10">
        <h2 className="font-bold w-auto text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-3xl flex justify-center ml-32 mr-32 mb-10">
          MENU
        </h2>
        <div className="-mt-6 sm:-mt-5 md:-mt-4 lg:-mt-3 xl:-m-2 2xl:-mt-1 ">
          {restaurantMenu &&
            restaurantMenu.map((category) => {
              return (
                <MenuCategory
                  key={
                    category?.card?.card?.title +
                    Math.floor(1000 * Math.random())
                  }
                  data={category?.card?.card}
                  resInfo={restaurantInfo}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
