const CheckoutCard = ({ item }) => {
  console.log(item);
  const { info, qty } = item;
  const perItemPrice = info.price / 100 || info.defaultPrice / 100;
  return (
    <div>
      <div className="flex justify-center m-auto  ">
        <div className="flex justify-between w-6/12 m-2 p-3 border-b-2 border-gray-100">
          <span>
            {info.name + " (" + qty + " x " + "₹ " + perItemPrice + ")"}
          </span>
          <span>₹ {qty * perItemPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
