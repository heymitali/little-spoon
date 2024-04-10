import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirmation");
  };

  return (
    <div className="lg:mx-20 lg:my-14 md:mx-10 md:my-7 sm:mx-7 sm:my-4">
      <div className="flex sm:justify-evenly justify-center">
        <div className="">
          <div className="w-auto">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-blue-700 m-2 p-2 mb-4">
              <h1>Contact Us</h1>
            </div>
            <div className="flex justify-between border-collapse p-8 rounded-2xl bg-blue-50 text-sm sm:text-md md:text-lg lg:text-xl xl:text-lg">
              <div className="grid w-[100%]">
                <input
                  placeholder="Name"
                  className="m-2 p-3 sm:p-4 rounded-xl border-collapse bg-blue-100 w-[16rem] xl:w-[32rem]"
                ></input>
                <input
                  placeholder="Email"
                  className=" m-2 p-3 sm:p-4 rounded-xl border-collapse bg-blue-100"
                ></input>
                <textarea
                  placeholder="Message"
                  className=" m-2 p-3 sm:p-4 h-48 rounded-xl border-collapse bg-blue-100"
                ></textarea>
                <div className="flex justify-center">
                  <button
                    className="m-4 p-3 sm:p-4 w-48 rounded-xl border-collapse bg-blue-500 text-white font-bold hover:brightness-125 hover:shadow-lg hover:shadow-gray-400"
                    onClick={handleClick}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 sm:ml-5 invisible w-0 sm:visible xl:w-auto">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=1380&t=st=1710534025~exp=1710534625~hmac=a4250972c625665db68a2fecd3b460246bbd9c74bd23a8a6ad7e0994c9172f8c"
            className="object-cover h-full overflow-hidden rounded-3xl xl:scale-110 2xl:scale-110 xl:h-[40rem]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
