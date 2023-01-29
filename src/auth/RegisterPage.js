import React, { useState } from "react";
import { accountService } from "@/_services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const { username, password, confirmPassword } = credentials;
  const [errors, setErrors] = useState({});

  // onChange
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // OnSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Les mots de passe ne correspondent pas" });
    } else {
      const newUser = {
        username: username,
        password: password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = JSON.stringify(newUser);
        await accountService
          .register(data, config)
          .then((result) => {
            accountService.saveToken(result.data.token);
            navigate("/admin", { replace: true });
          })
          .catch((err) => {
            setErrors(err.response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Page</h3>
      <div className="err">
        {errors.message && <p>{errors.message} </p>}
        {errors.confirmPassword && <p>{errors.confirmPassword} </p>}
      </div>
      <div className="text flex">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username || ""}
          onChange={onChange}
          placeholder="Username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password || ""}
          onChange={onChange}
          placeholder="Password"
          minLength="6"
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword || ""}
          onChange={onChange}
          placeholder="Confirm Password"
          minLength="6"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
