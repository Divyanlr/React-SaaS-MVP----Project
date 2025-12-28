import { Link, useLocation, useNavigate } from "react-router-dom"

export default function LeftSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  const linkClass = (path: string) =>
    `block px-4 py-3 rounded text-sm ${
      location.pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-700 hover:bg-green-100"
    }`

  return (
    <aside className="w-64 min-h-screen border-r bg-white flex flex-col">
      <div className="p-6 font-semibold text-lg text-green-700">
        <Link to="/" className={linkClass("/")}>
          Green SaaS
        </Link>
      </div>

      <nav className="px-3 space-y-1 flex-1">
        <Link to="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>

        <Link to="/profile" className={linkClass("/profile")}>
          Profile
        </Link>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}
