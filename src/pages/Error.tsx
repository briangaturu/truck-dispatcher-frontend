import { Link } from "react-router-dom";

const Error = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-[7rem] font-black text-primary leading-none mb-4">404</h1>
      <p className="text-xl text-slate-500 mb-7">Oops! This page doesn't exist.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg font-semibold text-sm bg-primary text-white border-2 border-primary transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark"
      >
        Go Home
      </Link>
    </div>
  </div>
);

export default Error;
