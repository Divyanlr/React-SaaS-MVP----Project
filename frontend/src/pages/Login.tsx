import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      setToken(data.token);
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify({ email: data.email }));

      navigate("/dashboard", { replace: true });
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-24 p-8 border rounded"
    >
      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <input
        type="email"
        className="w-full mb-4 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      <input
        type="password"
        className="w-full mb-6 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}
