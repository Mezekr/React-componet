import { useState } from "react";

const LoginView = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      access: username,
      secret: password,
    };
    fetch("https://openlibrary.org/account/login.json", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      response.ok ? onLogin(username) : alert("Login failed");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
          required
          minLength={3}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          minLength={8}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginView;
