import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import "./Signup.css";
import GenderCheckbox from "../../components/GenderCheckbox";
import useSignup from "../../hooks/useSignup.js";
import BloodGroupCheckbox from "../../components/BloodGroupCheckbox.jsx";

const Login = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
    email: '',
    age: '',
    bloodGroup: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleBloodGroup = (bloodGroup) => {
    setInputs({ ...inputs, bloodGroup });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="container signup">
      <div className="container signupHeader">
        <img src="bloodDrop.png" />
        <h1>RedHope</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h3 className="container">Signup</h3>
          <label><FaUser /> Full Name</label>
          <input type="text" placeholder="Enter Full Name"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
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
          <label><FaCalendarAlt /> Age</label>
          <input type="text" placeholder="Enter Age"
            value={inputs.age}
            onChange={(e) => setInputs({ ...inputs, age: e.target.value })} />
          <label><MdBloodtype /> Blood Group</label>
          <BloodGroupCheckbox onCheckboxChange={handleBloodGroup} selectedGroup={inputs.bloodGroup} />
          <label><FaTransgender /> Gender</label>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <button className="btn loginBtn signupBtn" disabled={loading}>Signup</button>
          <Link className="link signupLink" to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Login