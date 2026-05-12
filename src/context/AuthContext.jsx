import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? {
          email: localStorage.getItem("currentUserEmail"),
        }
      : null,
  );

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });

    return { success: true };
  }

  // Inside AuthProvider.js
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!found) {
      // Adding a message here helps the UI
      return { success: false, error: "Invalid email or password" };
    }

    setUser({ email });
    localStorage.setItem("currentUserEmail", email);
    return { success: true };
  }



  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  const context = useContext(AuthContext)
  return context;
}