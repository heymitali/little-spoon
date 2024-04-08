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
      const response = await fetch(
        "https://little-spoon-server.azurewebsites.net/api/restaurants"
      );

      const jsonResponse = await response.json();

      // logic to find restaurants list from the response. reason: swiggy APIs keeps on changing.
      const cards = jsonResponse?.data?.cards;
      let resList = [];
      for (let card of cards) {
        const list = card.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (list && list.length > 0) {
          resList = list;
          break;
        }
      }

      const set = new Set();
      const newUniqueRestaurants = [];
      resList.forEach((res) => {
        set.add(res.info.name);
      });

      dummyRestaurantsListData.forEach((res) => {
        if (!set.has(res.info.name)) {
          newUniqueRestaurants.push(res);
          set.add(res.info.name);
        }
      });

      resList.push(...newUniqueRestaurants);
      return resList;
    };

    const resList = await getRestaurantsData();
    setListOfRestaurants(resList);
    setFilterdList(resList);
  };

  if (listOfRestaurants && listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="lg:mx-10 lg:w-auto md:mx-10 sm:mx-12 mx-4">
      <div className="flex justify-center md:mt-6 sm:mt-8 mt-4 mx-1 my-2 sm:my-auto sm:mx-auto">
        <input
          placeholder="Craving Something? Find your favourite place Here!"
          type="text"
          className="lg:p-4 lg:mr-3 lg:mb-6 lg:ml-10 lg:mt-6 md:mr-2 sm:p-3 sm:mb-4 sm:mr-3 lg:h-14 lg:peer md:bg-transparent md:text-blue-gray-700 md:font-sans lg:font-normal md:font-light sm:outline-0 md:border-[2px] md:border-gray-300 md:focus:border-[2px] sm:focus:border-[2px] lg:focus:border-[2px] lg:text-lg md:text-[13px] md:px-2 lg:px-3 md:py-2.5 lg:py-2.5 md:rounded-[7px] md:border-blue-gray-200 md:focus:border-gray-500 sm:w-3/4 md:w-1/2 sm:border-gray-300 sm:border-[2px] sm:rounded-[7px] sm:text-sm sm:focus:border-gray-500 sm:h-10 md:h-10 w-full mr-2 border-[2px] rounded-md p-2 text-xs truncate"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="lg:p-4 md:p-2 md:px-4 text-white lg:font-bold md:font-semibold lg:mt-6 rounded-[6px] lg:w-32 lg:h-14 text-center lg:text-[18px] md:text-sm bg-[#00CCCC] hover:bg-[#00E0E0] sm:h-10 sm:p-2 sm:px-4 md:h-10 sm:text-sm text-sm p-2"
          onClick={() => {
            const filteredRestaurantList = listOfRestaurants.filter(
              (restaurant) =>
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
      <div className="lg:mx-24 md:mx-20 sm:mx-2">
        <div className="flex justify-between lg:mt-10 lg:mb-8 md:mt-3 md:mb-3 sm:mt-2 sm:mb-6 mb-3 mt-4">
          <span className="lg:text-2xl md:text-lg sm:text-sm md:font-bold sm:font-bold font-sans sm:pt-2 text-sm mr-10 sm:mr-0">
            Restaurants with online food delivery near you
          </span>
          <button
            className="lg:p-3 md:p-2 sm:p-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:brightness-125 md:text-xs lg:text-lg sm:text-xs text-xs p-2 w-36 sm:w-auto"
            onClick={() => {
              const filteredRestaurantList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilterdList(filteredRestaurantList);
            }}
          >
            Top restaurants near you!
          </button>
        </div>
      </div>

      <div className="lg:mx-16 md:mx-8 sm:mx-2 flex justify-center mb-6">
        <div className="flex justify-around">
          <div className="flex flex-wrap justify-evenly">
            {filteredList &&
              filteredList.map((restaurant, index) => (
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
    </div>
  );
};

export default Body;
