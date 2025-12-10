import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg">
      <div className="card">
        <h2>LOGIN</h2>

        <input type="text" placeholder="Username" className="inputBox" />
        <input type="password" placeholder="Password" className="inputBox" />

        <div className="row">
          <span>Remember me</span>
          <span className="forget">Forgot Password?</span>
        </div>

        <button className="btn">Login</button>

        <p className="regTxt">
          Don't have an account? <Link to="/register" className="hl">Register</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
