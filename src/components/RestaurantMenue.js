import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenue = () => {
  let { resId } = useParams();
  const fetchedData = useRestaurantMenu(resId);
  const restaurantMenu = fetchedData[0];
  const restaurantInfo = fetchedData[1];

  console.log(restaurantMenu);

  if (restaurantMenu === null || restaurantMenu.length === 0)
    return <Shimmer />;
  console.log(restaurantMenu);

  return (
    <div className="resMenueContainer">
      <div className="res-info">
        <h1 id="restaurant-title">{restaurantInfo.name}</h1>
        <h3>{restaurantInfo.cuisines.map((cuisine) => cuisine + ", ")}</h3>
        <h3>{restaurantInfo.locality + "" + restaurantInfo.city}</h3>
      </div>
      <div id="res-rating">
        <h3>{restaurantInfo.avgRatingString}</h3>
        <h4>{restaurantInfo.totalRatingsString}</h4>
      </div>
      <div className="del-cost">
        <h3>{restaurantInfo.sla.slaString}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>
      </div>
      <h2>What's there to eat?</h2>
      <div className="menue">
        {restaurantMenu.map((item) => (
          <div>
            <ul key={item.card.info.id}>
              <li>{item.card.info.name}</li>
              <li>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
              <li>{item.card.info.ratings.aggregatedRating.rating}</li>
              <li>{item.card.info.ratings.aggregatedRating.ratingCount}</li>
              <li>{item.card.info.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenue;
