import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="card shrink-0 w-4/5 md:w-sm max-w-sm shadow-2xl bg-base-100 mx-auto my-8">
      <div className="text-center py-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Join us now!</h1>
      </div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
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
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-mainred text-white">Sign up</button>
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
