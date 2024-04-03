import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="justify-center mt-20">
      <div className="h-60 w-auto overflow-hidden justify-center flex">
        <img
          src="https://emaillabs.io/wp-content/uploads/2023/07/Projekt-bez-nazwy-4.gif"
          className="object-cover h-60"
        />
      </div>
      <div className=" m-10 p-4 justify-center flex">
        <span className="font-semibold text-2xl">
          {" "}
          We've received your message loud and clear. We'll be in touch with you
          very soon!
        </span>
      </div>
      <div className="flex justify-center">
        <button
          class="relative inline-flex items-center justify-center p-0.5 w-32 h-auto mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          onClick={handleClick}
        >
          <span class="relative  w-32 h-auto px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white dark:text-blue-500 rounded-3xl group-hover:bg-opacity-0 hover:text-white">
            Go Home
          </span>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
