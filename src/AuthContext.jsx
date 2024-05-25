import { createContext, useReducer, useEffect } from "react";

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,

  // user: null,
  // role: null,
  // token: null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);
  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
