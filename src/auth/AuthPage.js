import React, { useState } from "react";
import AuthOutlet from "./AuthOutlet";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "./Styles.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="AuthPage grid">
      <AuthOutlet>{isLogin ? <LoginPage /> : <RegisterPage />}</AuthOutlet>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Register" : "Go to Login"}
      </button>
    </div>
  );
};

export default AuthPage;
