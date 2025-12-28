import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function Landing() {
  const loggedIn = isAuthenticated();

  return (
    <div>
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-semibold text-primary">B-eff</h1>

        <nav className="space-x-6">
          {loggedIn ? (
            <Link
              to="/profile"
              className="bg-primary text-teal-700 px-4 py-2 rounded-md"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link
                to="/register"
                className="bg-primary text-teal-700 px-4 py-2 rounded-md"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>
      </header>

      <section className="px-10 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Powering a Greener Business Future
        </h2>

        <p className="text-lg text-slate-600 mb-10">
          Track impact, optimize operations, and move towards sustainability
          with confidence.
        </p>

        {!loggedIn && (
          <Link
            to="/register"
            className="bg-secondary text-blue-400 px-6 py-3 rounded-lg"
          >
            Join Early Access
          </Link>
        )}
      </section>
    </div>
  );
}
