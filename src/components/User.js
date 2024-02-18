import { useState } from "react";
import { useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>

      <button className="count-btn" onClick={() => setCount(count + 1)}>
        Counter
      </button>

      <h2>Name: {props.name}</h2>
      <h2>Location: {props.location}</h2>
      <h2>Contact: {props.contact}</h2>
    </div>
  );
};

export default User;
