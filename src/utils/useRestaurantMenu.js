import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  let [restaurantMenu, setRestaurantMenu] = useState([]);
  let [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://little-spoon-server.azurewebsites.net/api/menu/" + resId
    );

    const json = await data.json();

    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) =>
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setRestaurantMenu(categories);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card.info);
  };

  return [restaurantMenu, restaurantInfo];
};

export default useRestaurantMenu;
