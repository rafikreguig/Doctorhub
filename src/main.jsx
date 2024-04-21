import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DoctorsProvider } from "./Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DoctorsProvider>
        <App />
      </DoctorsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
