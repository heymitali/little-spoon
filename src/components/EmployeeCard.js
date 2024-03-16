const EmployeeCard = ({ employee }) => {
  return (
    <div className="flex rounded-3xl m-4 bg-stone-50">
      <div>{/* <img src={employee.img}> </img> */}</div>
      <div className="flex m-4 p-2 w-[500px]">
        <ul>
          <li className="text-xl font-semibold ">
            <h2>{employee.name}</h2>{" "}
          </li>
          <li>
            <h3>{employee.role}</h3>
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
