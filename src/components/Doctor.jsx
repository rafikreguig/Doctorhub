import { Link, useParams } from "react-router-dom";
import { useDoctors } from "../Store";
import femaleavatar from "../assets/images/femaleavatar.svg";
import maleavatar from "../assets/images/maleavatar.svg";

const Doctor = () => {
  const { userId } = useParams();
  const { filteredData } = useDoctors();

  // Getting a specific doctor based on the id
  const doctor = filteredData.find((doctor) => doctor.id == userId);

  // Open the modal
  const openModel = () => {
    document.getElementById("my_modal_3").showModal();
  };

  if (!doctor) {
    return (
      <div className="w-5/6 md:w-3/4 p-8 mx-auto grid place-content-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="w-11/12 mx-auto mt-4 flex justify-start">
        <Link
          to={"/doctors"}
          className="flex items-center hover:bg-gray-100 rounded-lg px-2 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 mr-2"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <span className="text-gray-900 font-semibold text-base">Back</span>
        </Link>
      </div>
      <div className="relative w-5/6 md:w-3/4 p-8 mx-auto my-8 bg-white rounded-lg shadow sm:p-5 w">
        <div className="flex justify-start items-center mb-4 rounded-t sm:mb-5">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  doctor.gender.toLowerCase() == "male"
                    ? maleavatar
                    : femaleavatar
                }
              />
            </div>
          </div>
          <div className="ml-6">
            <h3 className="font-bold text-xl">{doctor.name}</h3>
            <p className="text-gray-900 text-base">{doctor.specialization}</p>
          </div>
        </div>
        <div className="flex justify-between mb-4 rounded-t sm:mb-5">
          <div className="text-gray-900">
            <h3 className="font-semibold text-xl">Location:</h3>
            <p className="text-gray-900 text-base">
              <svg
                className="w-4 h-4 text-gray-500 mr-2 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              {doctor.city}, Algeria.
            </p>
          </div>
        </div>
        <dl>
          <dt className="mb-2 mt-3 font-semibold leading-none text-gray-900 text-xl">
            Biography:
          </dt>
          <dd className="mb-4 text-gray-9000 sm:mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </dd>
          <dt className="mb-2 mt-3 font-semibold leading-none text-gray-900 text-xl">
            Contact Info:
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5">
            <p className="text-gray-900 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 mr-2 inline-block"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              name@example.com
            </p>
            <p className="text-gray-900 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 mr-2 inline-block"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              +213-555-555-555
            </p>
          </dd>
        </dl>
        <div className="flex justify-center md:justify-end">
          <button
            type="button"
            onClick={openModel}
            className="inline-flex items-center text-white bg-mainred hover:bg-rose-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#fff"
              className="w-4 h-4 mr-2"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
            </svg>
            Book appointment
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Schedule an appointment</h3>
              <p className="py-4">Will be available soon!</p>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
