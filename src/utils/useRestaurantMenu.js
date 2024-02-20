import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  let [restaurantMenu, setrestaurantMenu] = useState([]);
  let [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4618121&lng=78.35506629999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    const menu =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    setrestaurantMenu(menu);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card.info);
  };

  const arr = [restaurantMenu, restaurantInfo];
  return arr;
};

export default useRestaurantMenu;
