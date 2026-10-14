import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState('');

  const login = (name) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}