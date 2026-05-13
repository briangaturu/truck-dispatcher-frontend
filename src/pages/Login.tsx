import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../features/api/authApi";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login(form).unwrap();
      dispatch(setCredentials(result));
      const role = result.user.role;
      navigate(role === "admin" ? "/admin" : role === "driver" ? "/driver" : "/shipper");
    } catch {
      // error handled by RTK Query
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card__header">
          <h1>🚛</h1>
          <h2>Welcome Back</h2>
          <p>Sign in to your Truck Dispatcher account</p>
        </div>

        {error && (
          <div className="td-alert td-alert--error">
            Invalid email or password. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="td-field">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="td-field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="td-btn td-btn--primary td-btn--full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-card__footer">
          Don't have an account?{" "}
          <Link to="/register" className="td-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;