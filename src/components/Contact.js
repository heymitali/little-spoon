import { Link, Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirmation");
  };

  return (
    <div className="flex justify-between m-4 p-4 ml-24 mr-24">
      <span className="w-1/2">
        <div>
          <div className="text-5xl font-serif font-extrabold text-blue-700 m-2 p-2 mb-4">
            <h1>Contact Us</h1>
          </div>
          <div className=" flex justify-between border-collapse p-8 rounded-2xl bg-blue-50">
            <div className="grid w-[100%]">
              <input
                placeholder="Name"
                className=" m-2 p-4 rounded-xl border-collapse bg-blue-100"
              ></input>
              <input
                placeholder="Email"
                className=" m-2 p-4 rounded-xl border-collapse bg-blue-100"
              ></input>
              <textarea
                placeholder="Message"
                className=" m-2 p-4 h-48 rounded-xl border-collapse bg-blue-100"
              ></textarea>
              <div className="flex justify-center">
                <button
                  className="m-4 p-4 w-48 rounded-xl border-collapse bg-blue-500 text-white font-bold hover:brightness-125 hover:shadow-lg hover:shadow-gray-400"
                  onClick={handleClick}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
      <span className="w-1/2">
        <img
          src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=1380&t=st=1710534025~exp=1710534625~hmac=a4250972c625665db68a2fecd3b460246bbd9c74bd23a8a6ad7e0994c9172f8c"
          className="object-cover w-full h-auto overflow-hidden rounded-3xl "
        ></img>
      </span>
    </div>
  );
};

export default Contact;
