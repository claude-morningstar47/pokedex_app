import React, { useRef, useState } from "react";
import { accountService } from "@/_services";
import { useNavigate } from "react-router-dom";
// import GoogleLogin from "./GoogleLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      setError(
        "Veuillez entrer un nom d'utilisateur et un mot de passe valides"
      );
    } else {
      try {
        const {
          data: { token },
        } = await accountService.login({ username, password });
        accountService.saveToken(token);
        navigate("/admin", { replace: true });
      } catch (err) {
        setError(err.response.data.message);
      }
    }
    // else {
    //   const User = {
    //     username: username,
    //     password: password,
    //   };

    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };
    //     const data = JSON.stringify(User);

    //     await accountService
    //       .login(data, config)
    //       .then((result) => {
    //         accountService.saveToken(result.data.token);
    //         navigate("/admin", { replace: true });
    //         console.log(result);
    //       })
    //       .catch((err) => {
    //         setError(err.response.data);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div className="err">{error && <h3>{error}</h3>}</div>
        <div className="text flex">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            ref={usernameRef}
            placeholder="Username"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* <GoogleLogin /> */}
    </>
  );
};

export default LoginPage;
