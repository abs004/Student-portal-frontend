import { useState } from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem("userRole") || "student";
  });

  const handleLoginSuccess = (role) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role);
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("activeTab");
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <Dashboard userRole={userRole} onLogout={handleLogout} />
  ) : (
    <Login onLoginSuccess={handleLoginSuccess} />
  );
}

export default App;