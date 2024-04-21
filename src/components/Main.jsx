import docpic1 from "../assets/images/docpic1.jpg";
import docpic2 from "../assets/images/docpic2.jpg";
import docpic3 from "../assets/images/docpic3.jpg";
import line from "../assets/icons/line.svg";
import dots from "../assets/icons/dots.svg";

const Main = () => {
  return (
    <main className="relative overflow-y-hidden h-screen">
      <div className="absolute top-5 right-0 -z-10">
        <img src={dots} className="opacity-20" />
      </div>
      <div className="absolute bottom-12 md:-bottom-16 left-0 -z-10">
        <img src={dots} className=" w-60 opacity-10 md:opacity-20" />
      </div>
      <div className="h-5/6 md:h-4/5 flex flex-col-reverse md:flex-row justify-between items-center md:pt-10">
        <div className="w-11/12 md:w-1/2  flex flex-col justify-center gap-2 md:gap-5 md:pt-5">
          <div className="px-5 flex flex-col justify-center text-center md:text-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-5">
              Your{" "}
              <span
                className="bg-bottom bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${line})` }}
              >
                health
              </span>{" "}
              is our top priority
            </h1>
            <p className="text-base md:text-lg">
              Good health is a state of mental, physical and social well being
              and it does not just mean the absence of disease!
            </p>
          </div>
          <div className="px-1 mx-auto md:mx-0 md:px-5 py-4 md:py-8 w-11/12 md:w-3/4">
            <div className="join">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                  />
                </div>
              </div>
              <select className="select select-bordered join-item">
                <option disabled selected>
                  Filter
                </option>
                <option>Dentsit</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Radiology</option>
              </select>
              <div className="indicator">
                <button className="btn join-item bg-mainred text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-1/2 h-full flex justify-between items-center gap-2 px-4">
          <div
            className="w-1/3 bg-cover bg-center h-4/5 md:h-full rounded-md duration-200 hover:flex-custom1 flex-custom2"
            style={{ backgroundImage: `url(${docpic1})` }}
          ></div>
          <div
            className="w-1/3 bg-cover bg-center h-4/5 md:h-full rounded-md duration-200 hover:flex-custom1 flex-custom2"
            style={{ backgroundImage: `url(${docpic2})` }}
          ></div>
          <div
            className="w-1/3 bg-cover bg-center h-4/5 md:h-full rounded-md duration-200 hover:flex-custom1 flex-custom2"
            style={{ backgroundImage: `url(${docpic3})` }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
