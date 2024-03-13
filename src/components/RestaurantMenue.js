import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "../components/RestaurantCategories";

const RestaurantMenue = () => {
  let { resId } = useParams();
  const fetchedData = useRestaurantMenu(resId);
  const restaurantMenu = fetchedData[0];
  const restaurantInfo = fetchedData[1];

  if (restaurantMenu === null || restaurantMenu.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="resMenueContainer ">
      <div className="del-cost float-left ">
        <h3>{restaurantInfo.sla.slaString}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>
      </div>
      <div className="float-right ">
        <h3>{restaurantInfo.avgRatingString}</h3>
        <h4>{restaurantInfo.totalRatingsString}</h4>
      </div>

      <div className="grid justify-center m-8 p-4">
        <div className="">
          <h1 className="font-bold text-6xl p-2 border-b-2">
            {restaurantInfo.name}
          </h1>
        </div>
        <div className="">
          <h3 className="font-bold text-2xl pt-2 text-gray-600">
            {restaurantInfo.cuisines.map((cuisine) => cuisine + ", ")}
          </h3>
          <h3 className="font-bold text-m mb-2 pb-2 text-gray-400">
            {restaurantInfo.locality + ", " + restaurantInfo.city}
          </h3>
        </div>
      </div>
      <div className=" p-2 m-6 ">
        <h2 className="font-bold w-6/12 text-4xl m-4 p-4 border-b-2 ">
          What's there to eat?
        </h2>
        <div className="m-4 p-4 ">
          {restaurantMenu.map((category) => {
            return (
              <RestaurantCategories
                // key={category?.card?.card?.title}
                data={category?.card?.card}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenue;
