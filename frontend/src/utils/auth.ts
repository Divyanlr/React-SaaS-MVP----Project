const TOKEN_KEY = "auth_token"

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem("auth_token")
}

export const isAuthenticated = () => {
  const token = localStorage.getItem("auth_token")
  const user = localStorage.getItem("user")

  if (!token || !user || user === "undefined") {
    return false
  }

  return true
}

export const clearToken = () => {
  localStorage.removeItem("auth_token")
}
