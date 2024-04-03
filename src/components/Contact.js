import { Link, Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirmation");
  };

  return (
    <div className=" flex justify-between m-4 p-4">
      <span className="w-1/3">
        <div>
          <div className="text-5xl font-serif font-extrabold text-sky-900 m-2 p-2">
            <h1>Contact us</h1>
          </div>
          <div className=" flex justify-between border-collapse  p-8 rounded-3xl  bg-sky-50">
            <div className="grid">
              <input
                placeholder="Name"
                className=" m-2 p-4 w-96 rounded-full border-collapse bg-sky-100 "
              ></input>
              <input
                placeholder="Email"
                className=" m-2 p-4 rounded-full border-collapse bg-sky-100"
              ></input>
              <input
                placeholder="Message"
                className=" m-2 p-4 h-64 rounded-3xl border-collapse bg-sky-100"
              ></input>
              <div className="flex justify-center">
                <button
                  className=" m-4 p-4 w-2/3 rounded-full border-collapse bg-sky-400 text-white"
                  onClick={handleClick}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
      <span className="w-2/3">
        <img
          src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=1380&t=st=1710534025~exp=1710534625~hmac=a4250972c625665db68a2fecd3b460246bbd9c74bd23a8a6ad7e0994c9172f8c"
          className=""
        ></img>
      </span>
    </div>
  );
};

export default Contact;
