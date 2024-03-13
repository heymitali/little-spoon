import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  let [restaurantMenu, setRestaurantMenu] = useState([]);
  let [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    // const menu =
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards;

    const categories =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) =>
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setRestaurantMenu(categories);

    // setRestaurantMenu(menu);
    setRestaurantInfo(json?.data?.cards[0]?.card?.card.info);
  };

  const arr = [restaurantMenu, restaurantInfo];
  return arr;
};

export default useRestaurantMenu;
