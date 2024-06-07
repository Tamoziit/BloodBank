import { useAuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMale } from "react-icons/io5";
import { IoFemale } from "react-icons/io5";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { authUser } = useAuthContext();

  const centres = JSON.parse(localStorage.getItem("donate"));
  const filteredCentres = centres?.filter(item => item.username === authUser.username) || "";
  
  const ProfilePic = authUser.gender === "Male" ? `https://avatar.iran.liara.run/public/boy?username=${authUser.username}` : `https://avatar.iran.liara.run/public/girl?username=${authUser.username}`;

  return (
    <div className="container">
      <Navbar />
      <div className="container profileContainer">
        <div className="container heading">
          <h1>Profile</h1>
        </div>
        <div className="container profileDetails">
          <img src={ProfilePic} alt={authUser.username} />
          <h1>{authUser.username}</h1>
          <h4>Contributions</h4>
          {filteredCentres ? (<h2>{filteredCentres.length}</h2>) : (<h2>0</h2>)}
        </div>
        <div className="userDetails">
          <span className="container"><FaUser /> &nbsp; {authUser.fullName}</span>
          <span className="container"><MdEmail /> &nbsp; {authUser.email}</span>
          <span className="container"><FaPhoneAlt /> &nbsp; {authUser.mobileNo}</span>
          {authUser.gender === "Male" ? (<span className="container"><IoMale /> &nbsp; {authUser.gender}</span>) : (<span className="container"><IoFemale /> &nbsp; {authUser.gender}</span>)}
          <span className="container extra-details"><BsFillCalendarDateFill /> &nbsp; {authUser.age}</span>
          <span className="container"><MdBloodtype /> &nbsp; {authUser.bloodGroup}</span>
          <Link to="/donate" className="profileLink">Donate to update profile</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile