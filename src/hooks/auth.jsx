import { createContext, useContext } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  <AuthContext.Provider value={{ email: "lucas@email.com" }}>
    {children}
  </AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }