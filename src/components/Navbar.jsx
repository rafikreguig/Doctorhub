import { Link } from "react-router-dom";
import doctors from "../assets/images/doctors.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-b-md">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center md:navbar-start md:w-2/5">
        <Link to="/" className="px-2">
          <img src={doctors} className="w-1/2 md:w-2/3" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login-page" className="btn btn-ghost btn-sm mr-2">
          Login
        </Link>
        <Link
          to="/signup-page"
          className="btn bg-mainred hover:bg-rose-400 btn-sm text-white"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
