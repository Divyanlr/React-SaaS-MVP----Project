const BASE_URL = "http://localhost:8000"

export async function register(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail || "Registration failed")
  }

  return response.json()
}
