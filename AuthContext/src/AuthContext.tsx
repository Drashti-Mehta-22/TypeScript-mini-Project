import React, { createContext, useState, useContext } from 'react';

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null;        // User object OR null (not logged in)
  login: (user: User) => void  
  logout: () => void            
}

// Step 1: Create the context, undefined = default value before Provider wraps the app
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Step 2: Create the Provider component, This WRAPS your app and provides data to all children
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User): void => {
    setUser(userData)
  }

  const logout = (): void => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Step 3: Create custom hook to USE the context,This is what every component calls to get the data
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}