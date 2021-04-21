function Login({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>로그인</button>
    </div>
  );
}
export default Login;
