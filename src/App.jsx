import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userCookie = Cookies.get("loggedInUser");
    if (userCookie) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (username === "donald" && password === "duck") {
      Cookies.set("loggedInUser", username);
      console.log(Cookies.get("loggedInUser"));
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <p>Username: donald, Password: duck</p>
        <h1>Login</h1>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
};

export default App;
