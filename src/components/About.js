import User from "./User";
import UserClass from "./UserClass";
import { USER_DATA } from "../utils/constants";
import { USER_CLASS_DATA } from "../utils/constants";

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <h2>
        Central Perk has long been seen as the gathering place for locals to get
        a great cup of coffee and share moments with friends. With the help of
        NYC resident and famed chef Tom Colicchio, Central Perk has now come to
        life and is roasting premium coffee for you to enjoy at home.
      </h2>
      <div className="team">
        <h2>Our Team</h2>
        {USER_DATA.map((member) => (
          <User user={member} key={USER_DATA.indexOf(member)} />
        ))}
        {USER_CLASS_DATA.map((member) => (
          <UserClass user={member} key={USER_CLASS_DATA.indexOf(member)} />
        ))}
      </div>
    </div>
  );
};

export default About;
