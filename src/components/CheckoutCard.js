const CheckoutCard = ({ item }) => {
  return (
    <div>
      <div className="flex justify-center m-auto  ">
        <div className="flex justify-between w-6/12 m-2 p-3 border-b-2 border-gray-100">
          <span>{item.card.info.name}</span>
          <span>
            ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </span>
        </div>
      </div>
      ;
    </div>
  );
};

export default CheckoutCard;
