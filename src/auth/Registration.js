import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Imported Services ===>
import { accountService } from "@/_services";
import "./Styles.css";
const Registration = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  // onChange
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .register(credentials)
      .then((res) => {
        accountService.saveToken(res.data.token);
        navigate("/admin", { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <h1>Registration</h1>
        <div className="group">
          <label htmlFor="username">Identifiant</label>
          <input
            type="text"
            name="username"
            value={credentials.username || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Mot de pass</label>
          <input
            type="password"
            name="password"
            value={credentials.password || ""}
            onChange={onChange}
            required
          />
        </div>
        <div className="group">
          <button>Register</button>
          <Link className="link" to="/auth/login">
            Login
          </Link>
        </div>
      </form>
      {/* Google sign */}
      {/* <GoogleLogin /> */}
    </div>
  );
};

export default Registration;
