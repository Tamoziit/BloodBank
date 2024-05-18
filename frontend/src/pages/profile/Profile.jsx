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
  const donations = JSON.parse(localStorage.getItem('donate'));
  const filteredDonations = donations.filter(item => item.email === authUser.email);
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
          {filteredDonations.length !== 0 ? (<h2>{filteredDonations.length}</h2>) : (<h2>0</h2>)}
        </div>
        <div className="userDetails">
          {filteredDonations.length !== 0 ? (<span className="container"><FaUser /> &nbsp; {filteredDonations[0].fullName}</span>) : (<span className="container"><FaUser /> &nbsp; {authUser.username}</span>)}
          <span className="container"><MdEmail /> &nbsp; {authUser.email}</span>
          <span className="container"><FaPhoneAlt /> &nbsp; {authUser.mobileNo}</span>
          {authUser.gender === "Male" ? (<span className="container"><IoMale /> &nbsp; {authUser.gender}</span>) : (<span className="container"><IoFemale /> &nbsp; {authUser.gender}</span>)}
          {filteredDonations.length !== 0 ? (<div><span className="container extra-details"><BsFillCalendarDateFill /> &nbsp; {filteredDonations[0].age}</span>
            <span className="container"><MdBloodtype /> &nbsp; {filteredDonations[0].blood_group}</span></div>) : (<Link to="/donate" className="profileLink">Donate to update profile</Link>)}
        </div>
      </div>
    </div>
  )
}

export default Profile