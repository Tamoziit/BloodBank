import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Signup.css";
import GenderCheckbox from "../../components/GenderCheckbox";
import useSignup from "../../hooks/useSignup.js";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
    email: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className="container signup">
      <div className="container signupHeader">
        <img src="bloodDrop.png" />
        <h1>Red Hope</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h3 className="container">Signup</h3>
          <label><FaUser /> Username</label>
          <input type="text" placeholder="Enter Username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
          <label><RiLockPasswordFill /> Password</label>
          <input type="password" placeholder="Enter Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
          <label><RiLockPasswordFill /> Confirm Password</label>
          <input type="password" placeholder="Confirm Password"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
          <label><FaPhoneAlt /> Contacts</label>
          <input type="text" placeholder="Enter Mobile number"
            value={inputs.mobileNo}
            onChange={(e) => setInputs({ ...inputs, mobileNo: e.target.value })} />
          <label><MdEmail /> Email</label>
          <input type="email" placeholder="Enter Email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <button className="btn loginBtn" disabled={loading}>Signup</button>
          <Link className="link" to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Login