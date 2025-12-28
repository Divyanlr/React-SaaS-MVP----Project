import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function Landing() {
  const loggedIn = isAuthenticated();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-10 py-6 bg-white">
        <h1 className="text-2xl font-bold text-blue-700">Dummy-Site</h1>
        <nav className="flex items-center space-x-6">
          {loggedIn ? (
            <Link
              to="/profile"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>
      </header>
      <section className="relative px-10 py-24 bg-blue-400 text-center text-white flex-grow overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Powering a Greener Business Future
          </h2>
          <p className="text-xl mb-10 text-blue-50">
            Track impact, optimize operations, and move towards sustainability
            with confidence.
          </p>
          {!loggedIn && (
            <Link
              to="/register"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition shadow-lg"
            >
              Join Early Access
            </Link>
          )}
        </div>

        <img
          src="/src/assets/hero-wave.svg"
          alt="hero-wave"
          className="absolute bottom-0 left-0 w-full"
        />
      </section>

      <section className="px-10 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Sustainability Tracking
            </h3>
            <p className="text-gray-600">
              Monitor your carbon footprint and resource usage.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Smart Insights
            </h3>
            <p className="text-gray-600">
              Get actionable insights to boost your efficiency.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Secure & Compliant
            </h3>
            <p className="text-gray-600">
              Your data is protected with top-tier security.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Start your sustainability journey today
          </h3>
          {!loggedIn && (
            <Link
              to="/register"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
            >
              Create Account
            </Link>
          )}
        </div>
      </section>

      <footer className="bg-gray-50 py-6 px-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-gray-600">
          <p>© Dummy-site</p>
          <div className="space-x-6">
            <Link to="/privacy" className="hover:text-blue-600 transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
