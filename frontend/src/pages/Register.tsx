import { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) return setError("Invalid email");
    if (password.length < 8) return setError("Password too short");
    if (password !== confirm) return setError("Passwords do not match");

    try {
      await register(email, password);
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-24 p-8 border rounded"
    >
      <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

      <input
        className="w-full mb-4 p-2 border rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full mb-4 p-2 border rounded"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="w-full mb-4 p-2 border rounded"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button className="bg-primary text-blue-700 w-full py-2 rounded">
        Register
      </button>
    </form>
  );
}
