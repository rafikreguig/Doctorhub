import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Doctor from "./components/Doctor";
import About from "./components/About";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/" element={<Doctors />} />
        <Route path="/doctors/:userId" element={<Doctor />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
