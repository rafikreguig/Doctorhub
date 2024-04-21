import schedule_icon from "../assets/icons/schedule_icon.svg";
import sol_icon from "../assets/icons/sol_icon.svg";
import avatar_icon from "../assets/icons/avatar_icon.svg";

const Services = () => {
  return (
    <section className="py-0 md:py-10">
      <div className="w-2/3 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Step by step to <br />
          get your solution
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto mt-8 py-10 place-items-center">
        <div className="card w-64 bg-base-100">
          <figure>
            <img src={avatar_icon} />
          </figure>
          <div className="text-center">
            <h2 className="my-4 font-semibold text-xl">Choose doctor</h2>
            <p>
              The mission of the doctors is to provide the most effective and
              professional medical care.
            </p>
          </div>
        </div>
        <div className="card w-64 bg-base-100">
          <figure>
            <img src={schedule_icon} />
          </figure>
          <div className="text-center">
            <h2 className="my-4 font-semibold text-xl">Make a schedule</h2>
            <p>
              The mission of the doctors is to provide the most effective and
              professional medical care.
            </p>
          </div>
        </div>
        <div className="card w-64 bg-base-100">
          <figure>
            <img src={sol_icon} />
          </figure>
          <div className="text-center">
            <h2 className="my-4 font-semibold text-xl">Get your solution</h2>
            <p>
              The mission of the doctors is to provide the most effective and
              professional medical care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
