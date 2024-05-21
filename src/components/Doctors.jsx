import { useDoctors } from "../Store";
import DoctorCard from "./DoctorCard";
import { FilterDoctors } from "./FilterDoctors";

const Doctors = () => {
  const { filteredData } = useDoctors();
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <FilterDoctors />
        <div className="text-center py-2">
          <h1 className="text-2xl font-bold">Doctors list:</h1>
        </div>
        <div className="grid place-items-center gap-8 mb-6 lg:mb-16 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.length > 0 ? (
            <DoctorCard doctors={filteredData} />
          ) : (
            <div className="text-center sm:col-start-1 sm:col-end-4 lg:col-start-1 lg:col-end-6 my-4">
              <p className="font-semibold text-base text-base-400">
                Oops! there are no doctors to display.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
