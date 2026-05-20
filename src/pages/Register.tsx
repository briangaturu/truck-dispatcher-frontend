import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/api/authApi";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    role: "SHIPPER" as
      | "ADMIN"
      | "OWNER"
      | "DISPATCHER"
      | "FIELD_STAFF"
      | "DRIVER"
      | "SHIPPER",
  });

  const [pwError, setPwError] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

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
console.log("Submitting:", FormData); // or whatever your payload variable is
      if (result.success) {
        navigate("/verify-email", {
          state: { email: form.email },
        });
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      setPwError(
        err?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-600">
            Join Truck Dispatcher and get started today
          </p>
        </div>

        {(error || pwError) && (
          <div className="p-3 rounded-lg mb-4 text-sm font-medium bg-red-100 text-red-700 border-l-4 border-red-600">
            {pwError ||
              (error as any)?.data?.message ||
              "Registration failed. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <input
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500"
            />

            {/* Last Name */}
            <input
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500"
            />

            {/* Phone */}
            <input
              name="contact"
              placeholder="Phone Number"
              value={form.contact}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500"
            />

            {/* Role */}
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 bg-white"
            >
              <option value="SHIPPER">Shipper</option>
              <option value="DRIVER">Driver</option>
              <option value="FIELD_STAFF">Field Staff</option>
              <option value="ADMIN">Admin</option>
              <option value="OWNER">Owner</option>
              <option value="DISPATCHER">Dispatcher</option>
            </select>

            {/* Password */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500"
            />

            {/* Confirm Password */}
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg"
          >
            {isLoading
              ? "Creating account..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;