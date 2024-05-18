/* eslint-disable react/prop-types */
import "./BloodCard.css";
import "./cards.css";

const BloodCard = ({ data }) => {
    
    return (
        <div className="container bloodContainer">
            <img className="img" src="hospital.jpg" alt={data.blood_bank_hospital_name} />
            <div className="details">
                <h3>{data.blood_bank_hospital_name}</h3>
                <div className="subDetails">
                    <span className="head">Location: </span>
                    <span>{data.location}</span>
                </div>
                <div className="subDetails">
                    <span className="head">Contact: </span>
                    <span>{data.contact_number}</span>
                </div>
                <div className="availability">
                    <h4>Inventory: </h4>
                    {Object.entries(data.blood_inventory).map(([group, amount]) => (
                        <span key={group}>{group}: {amount}<br /></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BloodCard