import "./App.css";
import { BrowserRouter, Link } from "react-router-dom"
import AppRoutes from "./app/routes/AppRoutes"

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, borderBottom: "1px solid #eee" }}>
        <Link to="/" style={{ marginRight: 12 }}>Landing</Link>
        <Link to="/login" style={{ marginRight: 12 }}>Login</Link>
        <Link to="/register" style={{ marginRight: 12 }}>Register</Link>
        <Link to="/dashboard" style={{ marginRight: 12 }}>Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div style={{ padding: 16 }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}