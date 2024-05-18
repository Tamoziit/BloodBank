import { useState } from "react";
import BloodCard from "../../components/cards/BloodCard";
import Navbar from "../../components/navbar/Navbar";
import { blood_banks } from "../../data/blood_banks.json";
import "./FindBlood.css";
import { FaSearch } from "react-icons/fa";

const FindBlood = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBanks = searchTerm ? (blood_banks.filter((blood_bank) => {
    const nameMatches = blood_bank.blood_bank_hospital_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const locationMatches = blood_bank.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (nameMatches || locationMatches) return true;

    const bloodGroups = Object.keys(blood_bank.blood_inventory);
    const maxQuantityBloodGroup = bloodGroups.reduce((acc, bloodGroup) => {
      const quantity = blood_bank.blood_inventory[bloodGroup];
      if (bloodGroup.toLowerCase() === searchTerm.toLowerCase()) {
        return {
          bloodGroup,
          quantity: Math.max(acc.quantity, quantity),
        };
      }
      return acc;
    }, { bloodGroup: '', quantity: 0 });

    if (maxQuantityBloodGroup.bloodGroup && maxQuantityBloodGroup.quantity > 0) {
      return blood_bank.blood_inventory[maxQuantityBloodGroup.bloodGroup] === maxQuantityBloodGroup.quantity;
    }
    return false;
  })) : blood_banks;

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
      <div className="container grid-blood">
        <div className="container">
          <div className="grid-blood bloodGrid">
            {filteredBanks.map((item, idx) => {
              return (
                <BloodCard data={item} key={idx} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindBlood