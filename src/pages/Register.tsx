import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../features/api/authApi";
import { setCredentials } from "../features/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading, error }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "shipper" as "driver" | "shipper",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");

    try {
      // Prepare payload matching backend field names
      const finalPayload = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      };

      const result = await register(finalPayload).unwrap();
      console.log("REGISTER RESPONSE:", result);

      dispatch(setCredentials(result.data));

      const role = result.data.user.role;
      navigate(
        role === "driver"
          ? "/driver"
          : "/shipper"
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

        .reg-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
          background: #f4f1ec;
          position: relative;
          overflow: hidden;
          font-family: 'Epilogue', sans-serif;
        }

        .reg-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 10% 20%, rgba(99,102,241,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 90% 80%, rgba(14,165,233,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .shape {
          position: fixed;
          pointer-events: none;
          z-index: 0;
        }
        .shape-ring {
          width: 320px; height: 320px;
          border-radius: 50%;
          border: 1.5px solid rgba(99,102,241,0.1);
          top: -80px; left: -80px;
          animation: spin-slow 40s linear infinite;
        }
        .shape-ring-2 {
          width: 200px; height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(14,165,233,0.12);
          bottom: 60px; right: -50px;
          animation: spin-slow 30s linear infinite reverse;
        }
        .shape-dot-grid {
          width: 180px; height: 180px;
          top: 60px; right: 80px;
          background-image: radial-gradient(circle, rgba(99,102,241,0.15) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
          opacity: 0.6;
        }
        .shape-dot-grid-2 {
          width: 120px; height: 120px;
          bottom: 100px; left: 60px;
          background-image: radial-gradient(circle, rgba(14,165,233,0.12) 1.5px, transparent 1.5px);
          background-size: 14px 14px;
          opacity: 0.5;
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }

        .reg-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 520px;
          background: #ffffff;
          border-radius: 28px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 12px 40px rgba(99,102,241,0.1),
            0 40px 80px rgba(0,0,0,0.08);
          overflow: hidden;
          animation: card-in 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .card-accent {
          height: 5px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
          background-size: 200% 100%;
          animation: shimmer 3s ease infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .card-body { padding: 44px 48px 40px; }

        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          animation: fade-up 0.5s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .brand-icon {
          width: 52px; height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          box-shadow: 0 8px 20px rgba(99,102,241,0.3);
          flex-shrink: 0;
        }
        .brand-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 800;
          color: #1e1b4b;
          line-height: 1.1;
          margin: 0;
        }
        .brand-text p {
          font-size: 12px;
          color: #9ca3af;
          margin: 3px 0 0;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
          margin-bottom: 28px;
        }

        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 5px;
        }
        .form-subtitle {
          font-size: 13.5px;
          color: #6b7280;
          margin: 0 0 26px;
          font-weight: 400;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .error-box {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 20px;
          background: #fff1f2;
          border: 1px solid #fecdd3;
          border-radius: 14px;
          padding: 12px 16px;
          font-size: 13px;
          color: #be123c;
        }

        .form { display: flex; flex-direction: column; gap: 16px; }

        .field { display: flex; flex-direction: column; gap: 7px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        .field label {
          font-size: 11px;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .field input,
        .field select {
          height: 50px;
          padding: 0 18px;
          border-radius: 14px;
          border: 1.5px solid #e5e7eb;
          background: #f9fafb;
          color: #111827;
          font-size: 14px;
          font-family: 'Epilogue', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          -webkit-appearance: none;
        }
        .field input::placeholder { color: #d1d5db; }
        .field input:focus,
        .field select:focus {
          border-color: #6366f1;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(99,102,241,0.08);
        }
        .field select { cursor: pointer; }

        .submit-btn {
          position: relative;
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 40%, #0ea5e9 100%);
          color: #fff;
          font-family: 'Epilogue', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          overflow: hidden;
          margin-top: 6px;
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%);
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(99,102,241,0.4);
        }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .spinner {
          width: 17px; height: 17px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .card-footer-link {
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          margin-top: 22px;
        }
        .card-footer-link a {
          font-weight: 600;
          color: #6366f1;
          text-decoration: none;
        }
        .card-footer-link a:hover { color: #4f46e5; }

        .trust-strip {
          background: #f9fafb;
          border-top: 1px solid #f3f4f6;
          padding: 13px 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .trust-pill {
          font-size: 11px;
          color: #9ca3af;
          font-weight: 500;
        }
        .trust-sep { color: #d1d5db; font-size: 10px; }

        @media (max-width: 560px) {
          .card-body { padding: 32px 24px 36px; }
          .trust-strip { padding: 12px 24px; }
          .field-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="reg-page">
        <div className="shape shape-ring" />
        <div className="shape shape-ring-2" />
        <div className="shape shape-dot-grid" />
        <div className="shape shape-dot-grid-2" />

        <div className="reg-card">
          <div className="card-accent" />

          <div className="card-body">
            <div className="card-header">
              <div className="brand-icon">🚛</div>
              <div className="brand-text">
                <h1>Truck Dispatcher</h1>
                <p>Logistics Management Platform</p>
              </div>
            </div>

            <div className="divider" />

            <h2 className="form-title">Create an account</h2>
            <p className="form-subtitle">Start managing freight and logistics smarter.</p>

            {(passwordError || error) && (
              <div className="error-box">
                <span>⚠</span>
                <span>
                  {passwordError ||
                    (error as any)?.data?.message ||
                    "Something went wrong. Please try again."}
                </span>
              </div>
            )}

            <form className="form" onSubmit={handleSubmit}>
              {/* First Name + Last Name row */}
              <div className="field-row">
                <div className="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Kamau"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="hello@example.com"
                  value={formData.email} onChange={handleChange} required />
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+254 712 345 678"
                    value={formData.phone} onChange={handleChange} />
                </div>
                <div className="field">
                  <label>I am a</label>
                  <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="shipper">Shipper – Send freight</option>
                    <option value="driver">Driver – Haul freight</option>
                  </select>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="••••••••"
                    value={formData.password} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmPassword" placeholder="••••••••"
                    value={formData.confirmPassword} onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading
                  ? <><div className="spinner" /><span>Creating account…</span></>
                  : "Create Account →"}
              </button>
            </form>

            <div className="card-footer-link">
              Already have an account?{" "}
              <Link to="/login">Sign in</Link>
            </div>
          </div>

          <div className="trust-strip">
            <span className="trust-pill">🔒 Secure</span>
            <span className="trust-sep">·</span>
            <span className="trust-pill">Trusted logistics platform</span>
            <span className="trust-sep">·</span>
            <span className="trust-pill">Kenya 🇰🇪</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;