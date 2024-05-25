import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Doctor from "./components/Doctor";
import About from "./components/About";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import Dashboard from "./components/Dashboard.jsx";
import NotFoundPage from "./components/404.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/doctors/"
          element={
            <ProtectedRoute allowedRoles={["doctor", "patient"]}>
              <Doctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors/:userId"
          element={
            <ProtectedRoute allowedRoles={["doctor", "patient"]}>
              <Doctor />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
