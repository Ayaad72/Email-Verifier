import React, { useState } from "react";
import "../Bulk/App.css";
import logo from "../../assets/isssstbg.png";
import * as EmailValidator from "email-validator";
import { Link } from "react-router-dom";

const App = () => {
  const [emails, setEmails] = useState([]);
  const [verificationResults, setVerificationResults] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  const handleVerifyClick = () => {
    // Perform email verification logic
    const newArr = currentEmail
      .split("\n")
      .filter((email) => email.trim() !== "");
    setEmails([...emails, ...newArr]);

    // Verify each email and update results
    const results = newArr.map((email) => EmailValidator.validate(email));
    setVerificationResults([...verificationResults, ...results]);

    // Show the verification form
    setShowVerificationForm(true);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            {" "}
            <img id="bulk-logo" src={logo} alt="" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="text-section">
          <h2 className="animated-text">Bulk Email Verifier</h2>
          <p>Verify and clean your email list effortlessly.</p>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="input-section">
          <textarea
            id="textarea"
            type="text"
            placeholder="Enter email addresses"
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
          />
          <button id="btn-verifie" onClick={handleVerifyClick}>
            Verify
          </button>
        </div>
        {showVerificationForm && (
          <div className="verification-form">
            <table>
              <thead>
                <tr>
                  <th>SR</th>
                  <th>Email</th>
                  <th>Result</th>
                  {/* <th>MX</th> */}
                  <th>Quality</th>
                </tr>
              </thead>
              <tbody>
                {verificationResults.map((result, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{emails[index]}</td>
                    <td>{result ? "Valid" : "Invalid"}</td>
                    {/* <td>smtp.example.com</td> */}
                    <td>
                      {result && EmailValidator.validate(emails[index])
                        ? "High"
                        : "Low"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* ... (existing code) ... */}
        <div className="intro-container">
          <h2 className="intro-title">Email Verification Tool</h2>
          <p className="intro-text">
            It cleans your email list by filtering the spammy and invalid
            addresses that help you securely proceed towards your email
            campaign. But many email professionals are unaware of how to verify
            email addresses.
          </p>
        </div>
        <div className="info-section">
          <h2>Email Verification Tool</h2>
          <p>
            Why Email Verification required? If you are looking at email
            marketing and have a database, it would be beneficial to have active
            email id’s for good Email Campaign delivery rate and open rate. This
            tool will help you achieve that and decrease bounce rate for a
            better email marketing campaign, You will just have to copy and
            paste the email id’s in the tool and pick the format in which you
            want the report (COPY, Text, CSV & Excel Data format).
          </p>
          <h3>Tool is useful for:</h3>
          <ul>
            <li>Email Marketers</li>
            <li>Advertising Agencies</li>
            <li>Digital Marketers</li>
            <li>Campaign Managers</li>
            <li>Influencers</li>
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Bulk Email Verifier</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bulk Email Verifier. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
