import EmployeeCard from "./EmployeeCard";
import { EMPLOYEE_DATA } from "../utils/constants";

const About = () => {
  return (
    <div className="grid">
      <div className="flex justify-center m-6 p-2 2/3 h-auto">
        <h1 className="text-6xl">About Us</h1>
      </div>
      <div className="m-4 p-2 ">
        <div className="flex justify-between">
          <div className="w-1/2 m-4 ">
            <img src="https://img.freepik.com/free-vector/isolated-delivery-icon-white_1308-51057.jpg?w=1800&t=st=1710590772~exp=1710591372~hmac=b0170a5929545d6174a428429545c79c08196dafaca622d1987da6a967d4a051"></img>
          </div>

          <div className="w-1/2 m-4 p-4">
            <h1 className="text-xl">
              <span className="text-3xl">W</span>elcome to{" "}
              <span className="text-lime-600 font-bold">Monkey Meals</span> ,
              where we believe that every meal is a celebration of life. Our
              mission is to deliver not just food, but an experience right to
              your doorstep. With a passion for culinary excellence and a
              commitment to prompt service, we offer a diverse menu that caters
              to all taste buds. From the sizzle of spices to the melody of
              flavors, we ensure each dish is a masterpiece. Partnering with
              local farmers and artisans, we bring you the freshest ingredients
              because we care about the community and the environment. Join us
              on this delicious journey, as we promise to make every order an
              occasion to remember. 🍲🚚
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex justify-center  p-4">
          <h1 className="text-6xl m-4 p-2">Our Team</h1>
        </div>
        <div className="flex flex-wrap justify-around m-20 p-16 bg-stone-200 rounded-3xl ">
          {EMPLOYEE_DATA.map((employee) => (
            <EmployeeCard employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
