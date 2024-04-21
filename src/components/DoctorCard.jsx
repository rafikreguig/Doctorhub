import femaleavatar from "../assets/images/femaleavatar.svg";
import maleavatar from "../assets/images/maleavatar.svg";

const DoctorCard = ({ doctors }) => {
  return doctors.map((item, index) => (
    <div
      key={index}
      className="w-full max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow"
    >
      <div className="w-full">
        <img
          className="w-36 mx-auto p-4 rounded-full "
          src={item.gender == "female" ? femaleavatar : maleavatar}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Dr. {item.name}
          </h2>
        </a>
        <a href="#" className="flex my-2">
          <h5 className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded block">
            {item.specialty}
          </h5>
        </a>
        <h3 className="flex items-center py-4">
          <svg
            className="w-4 h-4 text-gray-500 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 16 20"
          >
            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          <span className="font-medium mr-1">Location: </span> {item.city}
        </h3>
        <div className="flex items-center justify-end md:mt-2">
          <a
            href="#"
            className="btn btn-ghost btn-sm md:btn-md text-white bg-mainred font-medium"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  ));
};

export default DoctorCard;

/* 
<div class="relative">
  <input
    type="text"
    id="floating_outlined"
    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
  />
  <label
    for="floating_outlined"
    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
  >
    Floating outlined
  </label>
</div>; */
