import { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import { useLoginMutation } from "../features/api/authApi";

import { setCredentials } from "../features/auth/authSlice";

import Navbar from "../components/Navbar";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [customError, setCustomError] =
    useState("");

  const [login, { isLoading, error }] =
    useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const successMessage = (
    location.state as any
  )?.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setCustomError("");

    try {
      const result = await login(
        form
      ).unwrap();

      const user = result.data.user;

      const token = result.data.token;

      const refreshToken =
        result.data.refreshToken;

      // Prevent login if email not verified
      if (!user.isVerified) {
        setCustomError(
          "Please verify your email before logging in."
        );

        navigate("/verify-email", {
          state: {
            email: user.email,
          },
        });

        return;
      }

      dispatch(
        setCredentials({
          user,
          token,
          refreshToken,
        })
      );

      // Save ONLY for current session
      sessionStorage.setItem(
        "token",
        token
      );

      sessionStorage.setItem(
        "refreshToken",
        refreshToken
      );

      sessionStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      // Redirect by role
      switch (user.role) {
        case "ADMIN":
          navigate("/admin");
          break;

        case "DRIVER":
          navigate("/driver");
          break;

        case "FIELD_STAFF":
          navigate("/field-staff");
          break;

        case "OWNER":
          navigate("/admin");
          break;

        default:
          navigate("/shipper");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar hideAuthButtons={true} />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>

            <p className="text-sm text-gray-600">
              Sign in to your Truck
              Dispatcher account
            </p>
          </div>

          {successMessage && (
            <div className="p-3 rounded-lg mb-4 text-sm font-medium bg-green-100 text-green-800 border-l-4 border-green-500">
              {successMessage}
            </div>
          )}

          {(error || customError) && (
            <div className="p-3 rounded-lg mb-4 text-sm font-medium bg-red-100 text-red-700 border-l-4 border-red-600">
              {customError ||
                (error as any)?.data
                  ?.message ||
                "Login failed"}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base outline-none transition-colors duration-200 focus:border-indigo-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base outline-none transition-colors duration-200 focus:border-indigo-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading
                ? "Signing in..."
                : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;