/* eslint-disable react/prop-types */
import "./DoctorCards.css";
import "./cards.css";

const DoctorCards = ({ data }) => {
    const ProfilePic = data.gender === "Male" ? `https://avatar.iran.liara.run/public/boy?username=${data.name}` : `https://avatar.iran.liara.run/public/girl?username=${data.name}`;

    return (
        <div className="container doctorContainer">
            <img className="img" src={ProfilePic} alt={data.name} />
            <div className="details">
                <h3>{data.name}</h3>
                <div className="subDetails">
                    <span className="head">Specialization: </span>
                    <span>{data.specialization}</span>
                </div>
                <div className="subDetails">
                    <span className="head">Location: </span>
                    <span>{data.location}</span>
                </div>
                <div className="subDetails">
                    <span className="head">Contact: </span>
                    <span>{data.contact_number}</span>
                </div>
                <div className="availability">
                    <h4>Availability: </h4>
                    {Object.entries(data.available_hours).map(([day, hours]) => (
                        <span key={day}>{day}: {hours}<br /></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoctorCards