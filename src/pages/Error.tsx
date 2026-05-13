import { Link } from "react-router-dom";

const Error = () => (
  <div className="error-page">
    <div className="error-page__inner">
      <h1>404</h1>
      <p>Oops! This page doesn't exist.</p>
      <Link to="/" className="td-btn td-btn--primary">
        Go Home
      </Link>
    </div>
  </div>
);

export default Error;