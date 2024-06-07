import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className="container login">
      <div className="container loginHeader">
        <img src="bloodDrop.png" />
        <h1>RedHope</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h3 className="container">Login</h3>
          <label><FaUser /> Username</label>
          <input type="text" placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
          <label><RiLockPasswordFill /> Password</label>
          <input type="password" placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <button className="btn loginBtn" disabled={loading}>Login</button>
          <Link className="link" to="/signup">Do not have an account? Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login