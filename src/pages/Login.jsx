import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email && password) {
      alert(`Email: ${email}\nPassword: ${password}`);
    } else {
      alert("Please enter both email and password.");
    }
    axios
      .post("https://reqres.in/api/login", loginPayload) //not finished
      .then((response) => {
        //get token from response
        const token = response.data.token;

        //Set JWT token to a cookie with an expiration date (e.g., 7 days)
        Cookies.set("token", token, { expires: 7 });

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
