import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

const useDoctorsSource = () => {
  const [doctors, setDoctors] = useState([]);
  // const [selectedCity, setSelectedCity] = useState("");
  // const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      selectedCity: "",
      selectedSpecialty: "",
    }
  );

  // const handleCitySelected = (event) => setSelectedCity(event.target.value);
  // const handleSpecialtySelected = (event) => setSelectedSpecialty(event.target.value);

  useEffect(() => {
    fetch("../public/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const filteredData = useMemo(
    () =>
      doctors.filter(
        (item) =>
          (state.selectedCity == "" || item.city == state.selectedCity) &&
          (state.selectedSpecialty == "" ||
            item.specialty == state.selectedSpecialty)
      ),
    [doctors, state.selectedCity, state.selectedSpecialty]
  );

  console.log(state.selectedCity, state.selectedSpecialty);
  return {
    filteredData,
    state,
    dispatch,
  };
};

const doctorsContext = createContext({});

export function useDoctors() {
  return useContext(doctorsContext);
}

export const DoctorsProvider = ({ children }) => {
  return (
    <doctorsContext.Provider value={useDoctorsSource()}>
      {children}
    </doctorsContext.Provider>
  );
};
