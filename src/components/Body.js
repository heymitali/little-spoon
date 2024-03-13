import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredList, setFilterdList] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  if (!onlineStatus) return <h1>Ops! You seem offline!!</h1>;
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-lime-200">
      <div className="filter">
        <div className="rounded-lg">
          <input
            type="text"
            className="p-1 m-8"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-1 m-4 "
            onClick={() => {
              filteredRestaurantList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterdList(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="p-3 mt-2 ml-6 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white"
          onClick={() => {
            filteredRestaurantList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilterdList(filteredRestaurantList);
          }}
        >
          Top restaurants near you!
        </button>
      </div>
      <div className="p-4 m-4 flex flex-wrap justify-start">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
