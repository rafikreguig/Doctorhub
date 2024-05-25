import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { BASE_URL } from "../../config";
import { authContext } from "../AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.msg);

      dispatch({
        type: "LOGIN",
        payload: {
          user: result.user,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "logging Data");
      setLoading(false);
      toast.success("login successfull");
      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="card shrink-0 w-4/5 md:w-sm max-w-sm shadow-2xl bg-base-100 mx-auto my-8">
      <div className="text-center py-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Login now!</h1>
      </div>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn bg-mainred text-white"
            disabled={loading && true}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="text-sm py-4">
            Are you new here?
            <Link to="/signup-page" className="link ml-1">
              create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
