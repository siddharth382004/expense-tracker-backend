import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthCard from "../components/AuthCard";
import { loginUser } from "../services/api";


export default function App() {
  // token state (single source of truth)
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(true);

  // called after successful login
  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  // logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // NOT logged in → auth screens
  if (!token) {
    return showLogin ? (
      <Login
        onSwitch={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
    ) : (
      <Register onSwitch={() => setShowLogin(true)} />
    );
  }

  // logged in → dashboard
  return <Dashboard token={token} onLogout={handleLogout} />;
}
