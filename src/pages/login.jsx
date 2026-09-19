import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Resident");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    onLogin(role);
  };

  return (
    <div className="login-page">

      <div className="login-image">
        <div className="login-overlay">
          <h1>Society Management Portal</h1>
          <p>
            Manage your society, residents and
            community activities easily.
          </p>
        </div>
      </div>

      <div className="login-form-container">

        <div className="login-form">

          <div className="login-logo">
            🏠
          </div>

          <h2>Welcome Back</h2>

          <p className="login-subtitle">
            Login to your account
          </p>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Login As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Resident">Resident</option>
              <option value="Admin">Admin</option>
              <option value="Security">Security</option>
            </select>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="login-footer">
            Society Management Portal
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;