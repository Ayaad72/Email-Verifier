// App.jsx
import React, { useState } from "react";
import "../login/Login.css";

const LoginPage = () => {
  const [isLoginTabActive, setLoginTabActive] = useState(true);

  const toggleTabs = () => {
    setLoginTabActive(!isLoginTabActive);
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="tabs">
          <h3
            className={`login-tab ${isLoginTabActive ? "active" : ""}`}
            onClick={toggleTabs}
          >
            Login
          </h3>
          <h3
            className={`signup-tab ${!isLoginTabActive ? "active" : ""}`}
            onClick={toggleTabs}
          >
            Sign Up
          </h3>
        </div>
        <div className="content">
          {isLoginTabActive ? (
            <div id="login-tab-content" className="tab-content active">
              {/* Login Form */}
              <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            <div id="signup-tab-content" className="tab-content active">
              {/* Sign Up Form */}
              <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
                <label>Confirm Password:</label>
                <input type="password" placeholder="Confirm your password" />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
