/* eslint-disable react/prop-types */
import "./DonateCard.css";
import "./cards.css";

const DonateCard = ({ data }) => {

    return (
        <div className="container donateContainer">
            <img className="img" src="hospital.jpg" alt={data.centre.blood_bank_hospital_name} />
            <div className="details">
                <h3>{data.centre.blood_bank_hospital_name}</h3>
                <div className="subDetails">
                    <span className="head">Location: </span>
                    <span>{data.centre.location}</span>
                </div>
                <div className="subDetails">
                    <span className="head">Contact: </span>
                    <span>{data.centre.contact_number}</span>
                </div>
                <div className="availability">
                    <h4>Appointment Details</h4>
                    <div className="subDetails">
                        <span className="head">Name: </span>
                        <span>{data.fullName}</span>
                    </div>
                    <div className="subDetails">
                        <span className="head">Contact: </span>
                        <span>{data.mobileNo}</span>
                    </div>
                    <div className="subDetails">
                        <span className="head">Email: </span>
                        <span>{data.email}</span>
                    </div>
                    <div className="subDetails">
                        <span className="head">gender: </span>
                        <span>{data.gender}</span>
                    </div>
                    <div className="subDetails">
                    <span className="head">Age: </span>
                    <span>{data.age}</span>
                </div>
                <div className="subDetails">
                    <span className="head">Blood Group Required: </span>
                    <span>{data.blood_group}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DonateCard