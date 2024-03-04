const LoginView = () => {
  return (
    <form action="">
      <label>
        Username:
        <input
          type="text"
          placeholder="Enter your Username"
          required
          minLength={3}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
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
