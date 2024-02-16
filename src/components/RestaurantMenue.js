import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenue = () => {
  let [restaurantMenu, setrestaurantMenu] = useState([]);
  let [restaurantInfo, setRestaurantInfo] = useState({});
  let { resId } = useParams();

  useEffect(() => {
    fetchMenue();
  }, []);

  const fetchMenue = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4618121&lng=78.35506629999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    const menu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    setrestaurantMenu(menu);
    setRestaurantInfo(json?.data?.cards[0]?.card?.card.info);
  };

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
