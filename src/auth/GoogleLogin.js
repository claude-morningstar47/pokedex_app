import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function GoogleLogin() {
  // Google auth
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    console.log("Encoded jwt id token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "845489820362-2dveugtjsjes3fba07fd7vfm4vpli2dg.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default GoogleLogin;
