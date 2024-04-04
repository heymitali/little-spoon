const EmployeeCard = ({ employee }) => {
  return (
    <div className="flex rounded-3xl m-4 bg-stone-50">
      <div className="flex m-4 p-2 w-[500px]">
        <ul>
          <li className="text-2xl font-semibold">
            <h2>{employee.name}</h2>{" "}
          </li>
          <li className="text-gray-600 text-[17px]">
            <h2>{employee.role}</h2>
          </li>

          <li className="font-thin mt-3">
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
