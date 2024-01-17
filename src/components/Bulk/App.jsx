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
    const newArr = currentEmail
      .split("\n")
      .filter((email) => email.trim() !== "");
    setEmails([...emails, ...newArr]);

    const results = newArr.map((email) => EmailValidator.validate(email));
    setVerificationResults([...verificationResults, ...results]);

    setShowVerificationForm(true);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
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
            className="learn-more-link"
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
                  <th>Quality</th>
                </tr>
              </thead>
              <tbody>
                {verificationResults.map((result, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{emails[index]}</td>
                    <td>{result ? "Valid" : "Invalid"}</td>
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
        <div className="intro-container">
          <h2 className="intro-title">Email Verification Tool</h2>
          <p className="intro-text">
            Our free service swiftly validates email authenticity and gauges its
            quality, ensuring users secure accurate and reliable information
            effortlessly. Verify and enhance your email data with ease on our
            platform.
          </p>
        </div>
        <div className="info-section mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Email Verification Tool</h2>
          <p className="text-gray-700 mb-4">
            Our website offers a complimentary email validation service, swiftly
            verifying the validity of users' emails. Additionally, we assess the
            quality of emails, aiding individuals in securing accurate and
            reliable information effortlessly. Embracing a cost-free model, we
            empower users to verify and enhance their email data with ease.
          </p>
          <h3 className="text-xl font-bold mb-2">Tool is useful for:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Email Marketers</li>
            <li>Advertising Agencies</li>
            <li>Digital Marketers</li>
            <li>Campaign Managers</li>
            <li>Influencers</li>
          </ul>
          <p className="text-gray-700">
            [Your Company Name] provides a user-friendly and free-of-cost
            service that goes beyond email validation. We assess the quality of
            each email to ensure you have a clean and engaged audience. Join us
            today and experience the difference in your email communication
            strategy!
          </p>
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
