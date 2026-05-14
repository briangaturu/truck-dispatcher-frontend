import { Link } from "react-router-dom";

const Error = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="font-display text-[7rem] font-black text-primary leading-none mb-4">404</h1>
      <p className="text-xl text-slate-500 mb-7">Oops! This page doesn't exist.</p>
      <Link to="/" className="td-btn td-btn--primary">
        Go Home
      </Link>
    </div>
  </div>
);

export default Error;