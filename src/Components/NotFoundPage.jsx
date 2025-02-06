import { Link } from "react-router-dom";
import "./notFoundPage.scss";
import { Twitter } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="not-found-container">
        <Twitter className="twitter-icon" />
        <h1>404 - Page Not Found</h1>
        <p className="not-found-text">
          Hmm...this page doesn't exist. Try searching for something else.
        </p>
        <Link className="btn-primary" to={"/signin"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
