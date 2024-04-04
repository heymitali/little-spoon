import EmployeeCard from "./EmployeeCard";
import { EMPLOYEE_DATA } from "../utils/constants";

const About = () => {
  return (
    <div className="grid mb-16">
      <div className="flex justify-around mt-16 mb-10 h-auto">
        <h1 className="text-5xl">About Us</h1>
      </div>
      <div className="mx-20 mb-8">
        <div className="flex justify-between">
          <div className="w-2/5 h-auto m-2 rounded-lg ">
            <img
              src="https://www.littlespoon.com/home-page-assets/imgs/How-it-Works.gif"
              className="object-cover overflow-hidden h-full w-full rounded-lg border-[1px] border-black"
            />
          </div>

          <div className="w-1/2 m-4 p-4">
            <h1 className="text-xl">
              <span className="text-3xl">W</span>elcome to{" "}
              <span className="text-lime-600 font-bold">Little Spoon</span> ,
              where we believe that every meal is a celebration of life. Our
              mission is to deliver not just food, but an experience right to
              your doorstep. With a passion for culinary excellence and a
              commitment to prompt service, we offer a diverse menu that caters
              to all taste buds. <br />
              <br />
              From the sizzle of spices to the melody of flavors, we ensure each
              dish is a masterpiece. Partnering with local farmers and artisans,
              we bring you the freshest ingredients because we care about the
              community and the environment. Join us on this delicious journey,
              as we promise to make every order an occasion to remember. 🍲🚚
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex justify-center mt-8 mb-4">
          <h1 className="text-5xl mb-6">Our Team</h1>
        </div>
        <div className="flex flex-wrap justify-around mx-20 p-8 bg-stone-200 rounded-3xl ">
          {EMPLOYEE_DATA.map((employee) => (
            <EmployeeCard employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
