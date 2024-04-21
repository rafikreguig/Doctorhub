import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card shrink-0 w-4/5 md:w-sm max-w-sm shadow-2xl bg-base-100 mx-auto my-8">
      <div className="text-center py-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Login now!</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-mainred text-white">Login</button>
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
