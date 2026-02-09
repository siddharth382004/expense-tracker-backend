import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return showLogin ? (
      <Login
        onSwitch={() => setShowLogin(false)}
        onLogin={(t) => setToken(t)}
      />
    ) : (
      <Register onSwitch={() => setShowLogin(true)} />
    );
  }

  return <Dashboard token={token} onLogout={handleLogout} />;
}
