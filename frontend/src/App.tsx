import "./App.css";
import { BrowserRouter, Link } from "react-router-dom"
import AppRoutes from "./app/routes/AppRoutes"

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Landing</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}