import { useDoctors } from "../Store";

export const FilterDoctors = () => {
  const { state, dispatch } = useDoctors();
  return (
    <div className="w-full flex justify-center py-6">
      <details className="dropdown w-full">
        <summary className="btn m-1 px-4 py-1">Filter</summary>
        <div className="flex flex-col md:flex-row w-11/12 mx-auto my-4 card bg-base-200 rounded-md py-2">
          <div className="grid flex-grow place-items-center ">
            <select
              className="select select-sm md:select-md select-bordered w-full max-w-xs px-2"
              value={state.selectedCity}
              onChange={(e) => dispatch({ selectedCity: e.target.value })}
            >
              <option disabled>Filter by city</option>
              <option value="">All cities</option>
              <option>Algeirs</option>
              <option>Oran</option>
              <option>Annaba</option>
              <option>Tipaza</option>
              <option>Setif</option>
              <option>Adrar</option>
            </select>
          </div>
          <div className="divider divider-vertical md:divider-horizontal">
            OR
          </div>
          <div className="grid flex-grow place-items-center">
            <select
              className="select select-bordered select-sm md:select-md w-full max-w-xs px-2"
              value={state.selectedSpecialty}
              onChange={(e) => dispatch({ selectedSpecialty: e.target.value })}
            >
              <option disabled>Filter by specialty</option>
              <option value="">All specialties</option>
              <option>Dentist</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Radiology</option>
            </select>
          </div>
        </div>
      </details>
    </div>
  );
};
