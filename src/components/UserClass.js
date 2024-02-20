import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h2>Location: {this.props.location}</h2>
        <h2>Contact: {this.props.contact}</h2>
      </div>
    );
  }
}
export default UserClass;
