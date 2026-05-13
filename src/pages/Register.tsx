import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../features/api/authApi";
import { setCredentials } from "../features/auth/authSlice";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "shipper" as "driver" | "shipper",
  });
  const [pwError, setPwError] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setPwError("Passwords do not match.");
      return;
    }
    setPwError("");
    try {
      const { confirmPassword, ...data } = form;
      const result = await register(data).unwrap();
      dispatch(setCredentials(result));
      navigate(result.user.role === "driver" ? "/driver" : "/shipper");
    } catch {
      // handled by RTK Query
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card auth-card--wide">
        <div className="auth-card__header">
          <h1>🚛</h1>
          <h2>Create Account</h2>
          <p>Join Truck Dispatcher and get started today</p>
        </div>

        {(error || pwError) && (
          <div className="td-alert td-alert--error">
            {pwError || "Registration failed. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form__grid">
            <div className="td-field">
              <label>Full Name</label>
              <input name="name" placeholder="John Kamau" value={form.name} onChange={handleChange} required />
            </div>
            <div className="td-field">
              <label>Email Address</label>
              <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="td-field">
              <label>Phone Number</label>
              <input name="phone" placeholder="+254 711 345 678" value={form.phone} onChange={handleChange} />
            </div>
            <div className="td-field">
              <label>Account Type</label>
              <select name="role" value={form.role} onChange={handleChange}>
                <option value="shipper">Shipper</option>
                <option value="driver">Driver</option>
              </select>
            </div>
            <div className="td-field">
              <label>Password</label>
              <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
            </div>
            <div className="td-field">
              <label>Confirm Password</label>
              <input name="confirmPassword" type="password" placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="td-btn td-btn--primary td-btn--full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-card__footer">
          Already have an account?{" "}
          <Link to="/login" className="td-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;