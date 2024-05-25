import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DoctorsProvider } from "./Store.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DoctorsProvider>
          <App />
          <ToastContainer autoClose={2000} position="top-center" />
        </DoctorsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
