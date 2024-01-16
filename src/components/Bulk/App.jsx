import React, { useState } from "react";
import "../Bulk/App.css";
// import logo from "./assets/isssstbg.png";

const App = () => {
  const [emails, setEmails] = useState([]);
  const [verificationResults, setVerificationResults] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  const handleVerifyClick = () => {
    // Perform email verification logic if needed
    // For now, just toggle the form visibility
    const newArr = currentEmail.split("\n");
    setEmails([...emails, newArr]);
  };

  console.log(emails, "EM");

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img id="img" alt="" />
          {/* <h1>Bulk Email Verifier</h1> */}
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
                  <th>MX</th>
                  <th>Quality</th>
                </tr>
              </thead>
              <tbody>
                {verificationResults.map((result, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{emails[index]}</td>
                    <td>{result}</td>
                    <td>smtp.example.com</td>
                    <td>High</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
            {/* <img id="img" src={logo} alt="Footer Logo" /> */}
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
