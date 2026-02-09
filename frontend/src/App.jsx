import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setShowLogin(true);
  };

  if (!token) {
    return showLogin ? (
      <Login onSwitch={() => setShowLogin(false)} onLogin={handleLogin} />
    ) : (
      <Register onSwitch={() => setShowLogin(true)} onLogin={handleLogin} />
    );
  }

  return <Dashboard token={token} onLogout={handleLogout} />;
}
