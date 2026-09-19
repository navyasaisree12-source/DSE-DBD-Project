import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import ResidentDashboard from "./pages/ResidentDashboard";

function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState("");

  // Open Login page
  const handleGetStarted = () => {
    setPage("login");
  };

  // After successful login
  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setPage("dashboard");
  };

  // Logout
  const handleLogout = () => {
    setRole("");
    setPage("home");
  };

  // =========================
  // LOGIN PAGE
  // =========================
  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onBack={() => setPage("home")}
      />
    );
  }

  // =========================
  // RESIDENT DASHBOARD
  // =========================
  if (page === "dashboard" && role === "Resident") {
    return (
      <ResidentDashboard
        onLogout={handleLogout}
      />
    );
  }

  // =========================
  // HOME PAGE
  // =========================
  return (
    <div className="app">

      {/* HEADER */}
      <header className="home-header">

        <div className="logo">

          <div className="logo-icon">
            🏠
          </div>

          <div>
            <h2>SocietyHub</h2>
            <span>Management Portal</span>
          </div>

        </div>

        <button
          className="login-button"
          onClick={handleGetStarted}
        >
          Login
        </button>

      </header>


      {/* HOME SECTION */}
      <main className="home-content">

        {/* LEFT SIDE */}
        <div className="home-text">

          <p className="welcome-text">
            WELCOME TO SOCIETYHUB
          </p>

          <h1>
            Smart Management
            <br />
            for a Better
            <br />
            <span>Community.</span>
          </h1>

          <p className="home-description">
            Manage your society, make payments, raise complaints,
            manage visitors and stay connected with your community
            — all in one place.
          </p>

          <button
            className="get-started-button"
            onClick={handleGetStarted}
          >
            Get Started →
          </button>

        </div>


        {/* RIGHT SIDE */}
        <div className="home-image">

          <div className="home-card">

            <div className="home-card-icon">
              🏢
            </div>

            <h2>
              Society Management
            </h2>

            <p>
              Everything you need to manage your
              residential community efficiently.
            </p>

            <div className="feature-list">

              <div>
                ✓ Maintenance Payments
              </div>

              <div>
                ✓ Visitor Management
              </div>

              <div>
                ✓ Complaint Tracking
              </div>

              <div>
                ✓ Amenity Booking
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;