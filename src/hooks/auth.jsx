import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
   
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common[authorization] = `Bearer ${token}`
      setData({ user, token })

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Unable to sign in. Please try again!")
      }
    }
  }

  function signOut() {
    const user = localStorage.removeItem("@rocketnotes:user")
    const token = localStorage.removeItem("@rocketnotes:token")
    
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")

    if(user && token) {
      api.defaults.headers.common[authorization] = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return (
  <AuthContext.Provider value={{ 
    signIn,
    signOut,
    user: data.user }}>
    {children}
  </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }