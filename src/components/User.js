const User = (user) => {
  <div className="user-card">
    {/* <img src={user.image} alt={user.name} /> */}
    <h2>Name: {user.name}</h2>
    <h2>Location: {user.location}</h2>
    <h3>Contact: {user.contact}</h3>
  </div>;
};

export default User;
