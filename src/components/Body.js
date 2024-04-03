import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { image } from "../utils/constants";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredList, setFilterdList] = useState([]);

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

    console.log("data >>>>> ", filteredList);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="m-2 p-2 ">
      <div className="filter">
        <div className="rounded-lg flex justify-center">
          <input
            placeholder="Craving Something? Find your favourite place Here!"
            type="text"
            className="p-4 mr-3 mb-6 ml-10 mt-6 w-6/12 h-14 border-2 border-gray-400 rounded-lg border-solid "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-1 text-white font-bold  mt-8 mr-2 ml-2  rounded-xl w-20 h-10 border-solid border-2 text-center border-black bg-gradient-to-r from-red-500 to-orange-500 "
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
        <div className="flex justify-center m-auto p-2 w-2/3 h-1/3 ">
          <img src={image} className="rounded-2xl w-max h-4/5"></img>
        </div>
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
