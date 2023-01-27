import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Imported Services ===>
import { accountService } from "@/_services";
import "./Styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "mopeno",
    password: "winds",
  });

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
      .login(credentials)
      .then((res) => {
        accountService.saveToken(res.data.token);
        navigate("/admin", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login grid">
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
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
        <div className="group flex">
          <button>Connexion</button>
          <Link className="link" to="/auth/register">
            Register
          </Link>
        </div>
      </form>
      {/* Google sign */}
      {/* <GoogleLogin /> */}
    </div>
  );
};

export default Login;
