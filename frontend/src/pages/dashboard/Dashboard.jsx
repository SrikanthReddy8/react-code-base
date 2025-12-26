import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard({ userEmail, onLogout }) {
  const [profileData, setProfileData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="dashboard-content">
        <h2>Welcome, {userEmail}</h2>
        {profileData && <p>Protected route says: {profileData.message}</p>}
      </div>
    </div>
  );
}
