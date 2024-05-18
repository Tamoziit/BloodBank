import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import "./Donate.css";
import GenderCheckbox from "../../components/GenderCheckbox";
import Navbar from "../../components/navbar/Navbar";
import { blood_banks } from "../../data/blood_banks.json";
import useDonate from "../../hooks/useDonate";
import BloodCard from "../../components/cards/BloodCard";
import { useAuthContext } from "../../context/AuthContext";

const Donate = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    age: '',
    blood_group: '',
    gender: '',
    centre: ''
  });

  const [centre, setCentre] = useState(null);
  const { loading, donate } = useDonate();
  const { authUser } = useAuthContext();

  const [filteredCentres, setFilteredCentres] = useState(() => {
    const centres = JSON.parse(localStorage.getItem("donate")) || [];
    return centres.filter(item => item.email === authUser.email);
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDonation = donate(inputs);
    if (newDonation) {
      setFilteredCentres([...filteredCentres, newDonation]);
      setInputs({
        fullName: '',
        mobileNo: '',
        email: '',
        age: '',
        blood_group: '',
        gender: '',
        centre: ''
      });
    }
  }

  const handleChange = (e) => {
    var i;
    for (i = 0; i < blood_banks.length; i++) {
      if (blood_banks[i].blood_bank_hospital_name === e.target.value) {
        setCentre(blood_banks[i]);
        setInputs({ ...inputs, centre: blood_banks[i] });
        break;
      }
    }
  }

  return <>
    <Navbar />
    <div className="container donate">
      <div className="container donateHeader">
        <img src="bloodDrop.png" />
        <h1>Red Hope</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h3 className="container">Donate for a Cause</h3>
          <label><FaUser /> Full Name</label>
          <input type="text" placeholder="Enter Full Name"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
          <label><FaPhoneAlt /> Contacts</label>
          <input type="text" placeholder="Enter Mobile number"
            value={inputs.mobileNo}
            onChange={(e) => setInputs({ ...inputs, mobileNo: e.target.value })} />
          <label><MdEmail /> Email</label>
          <input type="email" placeholder="Enter Email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
          <label><SlCalender /> Age</label>
          <input type="text" placeholder="Enter Age"
            value={inputs.age}
            onChange={(e) => setInputs({ ...inputs, age: e.target.value })} />
          <label><BiSolidDonateBlood /> Blood Group</label>
          <input type="text" placeholder="Enter your Blood Group"
            value={inputs.blood_group}
            onChange={(e) => setInputs({ ...inputs, blood_group: e.target.value })} />
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <select value={centre ? centre.blood_bank_hospital_name : "Select Centre"} onChange={handleChange}>
            <option>--Select Centre--</option>
            {blood_banks.map((item, idx) => (
              <option value={item.blood_bank_hospital_name} key={idx}>{item.blood_bank_hospital_name}, {item.location}</option>
            ))}
          </select>
          <button className="btn loginBtn" disabled={loading}>Submit</button>
        </div>
      </form>
    </div>
    <div className="donateList">
      <h2>Your Donation Centres List</h2>
      <div className="container grid-donate">
        <div className="container">
          {filteredCentres.length > 0 ? (
            <div className="grid-blood bloodGrid">
              {filteredCentres.map((item, idx) => (
                <BloodCard data={item.centre} key={idx} />
              ))} </div>
          ) : (
            <div className="container">
              <span className="default">You have not donated yet.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
}

export default Donate