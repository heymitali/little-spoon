import EmployeeCard from "./EmployeeCard";
import { EMPLOYEE_DATA } from "../utils/constants";

const About = () => {
  return (
    <div className="grid mb-10">
      <div className="flex justify-around sm:mt-16 sm:mb-10 mt-8 mb-5 lg:mx-40 md:mx-10 sm:mx-5 mx-3">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold">
          About Us
        </h1>
      </div>
      <div className="mb-8 xl:mx-40 md:mx-10 sm:mx-5 mx-3">
        <div className="sm:flex sm:justify-evenly">
          <div className="m-2 rounded-lg lg:w-[50rem] md:h-auto sm:h-[30rem] md:w-[20rem] sm:w-[15rem] h-[20rem]">
            <img
              src="https://www.littlespoon.com/home-page-assets/imgs/How-it-Works.gif"
              className="object-cover overflow-hidden h-full w-full rounded-lg border-[1px] border-black flex justify-center"
            />
          </div>

          <div className="sm:w-1/2 w-auto p-4">
            <h1 className="text-[0.8rem] sm:text-[1rem] md:text-lg lg:text-2xl">
              <span className="md:text-3xl sm:text-2xl text-xl">W</span>
              elcome to{" "}
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
      <div className="xl:mx-40 lg:mx-10">
        <div className="flex justify-center sm:mt-8 sm:mb-8">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold mb-6">
            Our Team
          </h1>
        </div>
        <div className="flex justify-around xl:mx-20 lg:mx-0 md:mx-20 sm:mx-5 mx-4 sm:p-8 p-2 bg-stone-200 rounded-3xl ">
          <div className="flex justify-center flex-wrap">
            {EMPLOYEE_DATA.map((employee) => (
              <EmployeeCard employee={employee} key={employee.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
