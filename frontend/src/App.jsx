import { useState, useEffect } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if token exists → simple way to keep login after refresh
    const token = localStorage.getItem("token");
    if (token) {
      setUser("User"); // optionally decode token to get email
    }
  }, []);

  const handleLogin = (email) => setUser(email);
  const handleLogout = () => setUser(null);

  return (
    <div>
      {user ? (
        <Dashboard userEmail={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
