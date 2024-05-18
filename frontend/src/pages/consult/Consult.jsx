import { useState } from "react";
import { doctors } from "../../data/indian_doctors.json";
import DoctorCards from "../../components/cards/DoctorCards";
import Navbar from "../../components/navbar/Navbar";
import "./Consult.css";
import { FaSearch } from "react-icons/fa";

const Consult = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = searchTerm
    ? doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : doctors;

  return (
    <div className="container">
      <Navbar />
      <div className="search-bar-container">
        <FaSearch />
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div className="container">
        <div className="grid doctorGrid">
          {filteredDoctors.map((item, idx) => {
            return (
              <DoctorCards data={item} key={idx} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Consult