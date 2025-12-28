import { useNavigate } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleDeleteAccount = async () => {
    if (!user?.email) return;
    

    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete your account?"
    );

    if (!confirmDelete) return;

    await fetch(`http://localhost:8000/auth/delete/${user.email}`, {
      method: "DELETE",
    });

    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex">
      <LeftSidebar />

      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold mb-6">Profile</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm max-w-xl">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">
              {user?.email}
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-3">
              GDPR Controls
            </p>

            <button
              onClick={handleDeleteAccount}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
