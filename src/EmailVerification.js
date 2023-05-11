import React, { useState } from "react";
// import "./styles.css";

function EmailVerification() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isTestCodeCorrect, setIsTestCodeCorrect] = useState(false);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your email verification logic.
    // For simplicity, we will assume the email is always valid.
    setIsEmailVerified(true);
  };

  const handleVerificationSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your verification code logic.
    // For simplicity, we will assume the code is always "1234".
    if (verificationCode === "1234") {
      setIsTestCodeCorrect(true);
    }
  };

  return (
    <div>
      <h1>Existing Users</h1>
      {!isEmailVerified ? (
        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Verify Email
          </button>
        </form>
      ) : !isTestCodeCorrect ? (
        <form onSubmit={handleVerificationSubmit}>
          <div className="form-group">
            <label htmlFor="verificationCode">Verification Code</label>
            <input
              type="text"
              className="form-control"
              id="verificationCode"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div className="success-message">
          <p>Email and test code verified!</p>
        </div>
      )}
    </div>
  );
}

export default EmailVerification;
