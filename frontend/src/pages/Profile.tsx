export default function Profile() {
  const userData = {
    email: "user@example.com",
    joinedAt: "2024-01-10",
  }

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(userData, null, 2)], {
      type: "application/json",
    })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "my-data.json"
    link.click()
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 border rounded">
      <h2 className="text-xl font-semibold mb-6">Profile</h2>

      <p>Email: {userData.email}</p>
      <p className="mb-6">Joined: {userData.joinedAt}</p>

      <button
        onClick={handleExport}
        className="mb-4 bg-accent text-white px-4 py-2 rounded"
      >
        Export My Data
      </button>

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Request Account Deletion
      </button>
    </div>
  )
}
