import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "patient",
    speciality: "",
    gender: "",
    city: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();
      if (!res.ok) throw new Error(message);

      setLoading(false);
      toast.success(message);
      navigate("/login-page");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="card shrink-0 w-4/5 md:w-sm max-w-sm shadow-2xl bg-base-100 mx-auto my-8">
      <div className="text-center py-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Join us now!</h1>
      </div>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form_control">
          <select
            className="select select-bordered w-full max-w-xs"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option disabled selected>
              Register as a?
            </option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full name</span>
          </label>
          <input
            type="text"
            placeholder="full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        {formData.role === "doctor" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <input
                type="text"
                placeholder="specialty"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Gender</span>
                </div>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option disabled selected>
                    What is your gender?
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
          </>
        )}
        <div className="form-control mt-6">
          <button
            className="btn bg-mainred text-white"
            disabled={loading ? true : false}
          >
            {loading ? "loading..." : "Sign up"}
          </button>
          <p className="text-sm py-4">
            You already have an account?
            <Link to="/login-page" className="link ml-1">
              login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
