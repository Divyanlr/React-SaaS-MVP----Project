import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    // call API later
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-8 border rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Create account</h2>

      <input
        className="w-full mb-4 p-2 border rounded"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        className="w-full mb-4 p-2 border rounded"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <input
        type="password"
        className="w-full mb-4 p-2 border rounded"
        placeholder="Confirm Password"
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button className="bg-primary text-blue-400 w-full py-2 rounded">
        Register
      </button>
    </form>
  );
}
