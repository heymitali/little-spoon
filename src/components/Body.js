import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { dummyRestaurantsListData } from "../utils/dummyRestaurantsData";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredList, setFilterdList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const getRestaurantsData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const resList = await data.json();

      const set = new Set();
      const newUniqueRestaurants = [];
      resList?.data.cards[4].card?.card?.gridElements?.infoWithStyle.restaurants.forEach(
        (element) => {
          set.add(element.info.name);
        }
      );

      dummyRestaurantsListData.forEach((element) => {
        if (!set.has(element.info.name)) {
          newUniqueRestaurants.push(element);
          set.add(element.info.name);
        }
      });

      resList.data.cards[4].card?.card?.gridElements?.infoWithStyle.restaurants.push(
        ...newUniqueRestaurants
      );

      return resList;
    };

    const json = await getRestaurantsData();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants && listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="ml-16 mr-16 mb-10">
      <div className="rounded-lg flex justify-center mt-4">
        <input
          placeholder="Craving Something? Find your favourite place Here!"
          type="text"
          className="p-4 mr-3 mb-6 ml-10 mt-6 w-1/2 h-14 peer bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-300 border-2 border-gray-600 focus:border-2 text-md px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-4 text-white font-bold mt-6 rounded-[8px] w-32 h-14 border-solid border-1 border-gray-700 text-center text-md bg-[#00CCCC] hover:bg-[#00E0E0]"
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
      <div className="flex justify-between ml-[9rem] mr-[9rem] mt-10 mb-5">
        <span className="text-2xl font-bold font-sans pt-2">
          Restaurants with online food delivery near you
        </span>
        <button
          className="p-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:brightness-125"
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
      <div className="flex justify-around">
        <div className="flex flex-wrap w-[78rem]">
          {filteredList.map((restaurant, index) => (
            <Link
              key={restaurant.info.id + index}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
