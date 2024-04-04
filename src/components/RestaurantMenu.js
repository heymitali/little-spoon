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
        <div className="w-[60%] flex flex-col justify-center m-8 p-6 border-2 border-black rounded-md">
          <img
            src={restImage}
            className="h-[15rem] w-full object-cover overflow-hidden z-0 relative rounded-sm"
          />
          <div className="">
            <h1 className="font-bold text-5xl p-2 border-b-2">
              {restaurantInfo.name}
            </h1>
          </div>
          <div className="mt-3">
            <span className="font-bold text-2xl pt-2 text-gray-600">
              {restaurantInfo.cuisines.join(", ")}
            </span>
            <span className="text-2xl">{" | "}</span>
            <span className="font-bold text-2xl mb-2 pb-2 text-gray-400">
              {restaurantInfo.locality + ", " + restaurantInfo.city}
            </span>
          </div>
          <div className="del-cost float-left mt-2">
            <h3>{restaurantInfo.costForTwoMessage}</h3>
          </div>
          <div className="float-right mt-2">
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
      <div className="pl-24 pr-24 mt-4 mb-10">
        <h2 className="font-bold w-auto text-4xl flex justify-center ml-32 mr-32 mb-10">
          MENU
        </h2>
        <div className="">
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
