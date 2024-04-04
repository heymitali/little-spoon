const CheckoutCard = ({ item }) => {
  console.log(item);
  const { info, qty } = item;
  const perItemPrice = info.price / 100 || info.defaultPrice / 100;
  return (
    <div>
      <div className="w-full flex justify-between text-lg m-2 p-3 pl-10 pr-10">
        <span className="text-gray-600">
          {info.name + " (" + qty + " x " + "₹" + perItemPrice + ")"}
        </span>
        <span className="text-gray-600">₹ {qty * perItemPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutCard;
