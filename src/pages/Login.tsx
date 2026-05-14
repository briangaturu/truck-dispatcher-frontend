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

      console.log("LOGIN RESPONSE 👉", result);

      // ✅ FIX: correct API structure
      const user = result.data.user;
      const token = result.data.token;

      dispatch(setCredentials({ user, token }));

      // ✅ FIX: role extraction (NO undefined)
      const role = user.role;

      // ✅ FIX: role comparison with correct case (lowercase)
      if (role === "admin") navigate("/admin");
      else if (role === "driver") navigate("/driver");
      else navigate("/shipper");

    } catch (err) {
      console.error("LOGIN ERROR 👉", err);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

        .login-page {
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

        .login-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 10% 20%, rgba(99,102,241,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 90% 80%, rgba(14,165,233,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .l-shape {
          position: fixed;
          pointer-events: none;
          z-index: 0;
        }
        .l-shape-ring {
          width: 320px; height: 320px;
          border-radius: 50%;
          border: 1.5px solid rgba(99,102,241,0.1);
          top: -80px; left: -80px;
          animation: l-spin 40s linear infinite;
        }
        .l-shape-ring-2 {
          width: 200px; height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(14,165,233,0.12);
          bottom: 60px; right: -50px;
          animation: l-spin 30s linear infinite reverse;
        }
        .l-dot-grid {
          width: 180px; height: 180px;
          top: 60px; right: 80px;
          background-image: radial-gradient(circle, rgba(99,102,241,0.15) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
          opacity: 0.6;
        }
        .l-dot-grid-2 {
          width: 120px; height: 120px;
          bottom: 100px; left: 60px;
          background-image: radial-gradient(circle, rgba(14,165,233,0.12) 1.5px, transparent 1.5px);
          background-size: 14px 14px;
          opacity: 0.5;
        }
        @keyframes l-spin { to { transform: rotate(360deg); } }

        .login-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 440px;
          background: #ffffff;
          border-radius: 28px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 12px 40px rgba(99,102,241,0.1),
            0 40px 80px rgba(0,0,0,0.08);
          overflow: hidden;
          animation: l-card-in 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes l-card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .l-accent {
          height: 5px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
          background-size: 200% 100%;
          animation: l-shimmer 3s ease infinite;
        }
        @keyframes l-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .l-body { padding: 44px 48px 40px; }

        .l-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 32px;
        }

        .l-brand-icon {
          width: 56px; height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px;
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
          margin-bottom: 20px;
        }

        .l-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 11px;
          font-weight: 700;
          color: #9ca3af;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 0 0 10px;
        }

        .l-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 6px;
          line-height: 1.15;
        }

        .l-subtitle {
          font-size: 13.5px;
          color: #6b7280;
          margin: 0;
          font-weight: 400;
        }

        .l-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
          margin-bottom: 28px;
        }

        .l-error {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          background: #fff1f2;
          border: 1px solid #fecdd3;
          border-radius: 14px;
          padding: 12px 16px;
          font-size: 13px;
          color: #be123c;
        }

        .l-form { display: flex; flex-direction: column; gap: 16px; }

        .l-field { display: flex; flex-direction: column; gap: 7px; }

        .l-field label {
          font-size: 11px;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .l-field input {
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
        }

        .l-field input::placeholder { color: #d1d5db; }

        .l-field input:focus {
          border-color: #6366f1;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(99,102,241,0.08);
        }

        .l-forgot {
          display: flex;
          justify-content: flex-end;
          margin-top: -8px;
        }

        .l-forgot a {
          font-size: 12px;
          color: #6366f1;
          font-weight: 500;
          text-decoration: none;
        }

        .l-submit {
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
          cursor: pointer;
        }
      `}</style>

      <div className="login-page">
        <div className="l-shape l-shape-ring" />
        <div className="l-shape l-shape-ring-2" />
        <div className="l-shape l-dot-grid" />
        <div className="l-shape l-dot-grid-2" />

        <div className="login-card">
          <div className="l-accent" />

          <div className="l-body">
            <div className="l-header">
              <div className="l-brand-icon">🚛</div>
              <p className="l-brand-name">Truck Dispatcher</p>
              <h2 className="l-title">Welcome back</h2>
              <p className="l-subtitle">Sign in to your dispatch account</p>
            </div>

            <div className="l-divider" />

            {error && (
              <div className="l-error">
                <span>⚠</span>
                <span>Invalid email or password. Please try again.</span>
              </div>
            )}

            <form className="l-form" onSubmit={handleSubmit}>
              <div className="l-field">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="l-field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="l-submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In →"}
              </button>
            </form>

            <div className="l-footer-link">
              Don't have an account? <Link to="/register">Register here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;