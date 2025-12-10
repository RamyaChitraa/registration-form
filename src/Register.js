import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  // Validation
  const validateName = (value) => {
    setName(value);
    if (value.trim() === "") setNameError("Name cannot be empty");
    else setNameError("");
  };

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) setEmailError("Enter valid email address");
    else setEmailError("");
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) setPassError("Password must be at least 6 characters");
    else setPassError("");
  };

  const isFormValid = name && email && password && !nameError && !emailError && !passError;

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => validateName(e.target.value)}
      />
      <p className="error">{nameError}</p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => validateEmail(e.target.value)}
      />
      <p className="error">{emailError}</p>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => validatePassword(e.target.value)}
      />
      <p className="error">{passError}</p>

      <button disabled={!isFormValid}>Register</button>
    </div>
  );
};

export default Register;
