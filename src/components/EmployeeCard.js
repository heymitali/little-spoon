const EmployeeCard = ({ employee }) => {
  return (
    <div className="flex rounded-3xl m-4 bg-stone-50">
      <div className="px-6 py-4 sm:w-[500px] md:w-[250px] lg:w-[400px] w-[300px] xl:w-[350px] p-2">
        <ul>
          <li className="lg:text-2xl md:text-xl sm:text-lg text-[15px] font-semibold">
            <h2>{employee.name}</h2>{" "}
          </li>
          <li className="text-gray-600 xl:text-[17px] md:text-[15px] sm:[12px] text-[12px]">
            <h2>{employee.role}</h2>
          </li>

          <li className="font-thin lg:text-[20px] md:text-[18px] sm:[14px] text-[14px] mt-3">
            <h3>
              <span className="font-medium">"</span>
              {employee.say}
              <span className="font-medium">"</span>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default EmployeeCard;
