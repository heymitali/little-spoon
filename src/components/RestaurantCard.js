import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg">
      <div>
        <img
          className="res-img rounded-lg  mb-2"
          alt="res-img"
          src={IMAGE_BASE_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{avgRating} ✯</h4>
        <h4>Cost for two: {costForTwo}</h4>
        <h4 id={"res-cuisine"}>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
