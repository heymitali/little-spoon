import { useState, useEffect } from "react";

const RestaurantMenue = () => {
  const [restaurantMenue, setRestaurantMenue] = useState("");

  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    const data = fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4618121&lng=78.35506629999999&restaurantId=373101&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = data?.json;
    setRestaurantMenue();
  };

  return (
    <div className="resMenueContainer">
      <div className="res-info">
        <h1>res name</h1>
        <h3>cuisines</h3>
        <h3>location</h3>
      </div>
      <div id="res-rating">
        <h3>rating</h3>
        <h4>no.of people rated</h4>
      </div>
      <div className="del-cost">
        <h3>deliveru time</h3>
        <h3>cost of two</h3>
      </div>
      <h2>What's there to eat?</h2>
    </div>
  );
};
