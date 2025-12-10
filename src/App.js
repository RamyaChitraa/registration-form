import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./index.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app-bg">
      {showLogin ? (
        <Login switchToRegister={() => setShowLogin(false)} />
      ) : (
        <Register switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default App;
