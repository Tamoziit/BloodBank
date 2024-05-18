import "./UpcomingEvent.css";

const UpcomingEvent = () => {
  return (
    <div className='section'>
      <div className="upGrid">
        <div className="container event">
          <img src="upeve1.jpg" alt="event1" className="upImg" />
          <div className="upDetails">
            <h2 className="upHead">World Blood Donor Day</h2>
            <span className="upDate">Date: 14th June, 2024</span>
            <h4 className="upLine">Blood Donation Camp at Tata Medical Centre</h4>
            <p className="para">
              On the occasion of World Blood Donor Day, a voluntary blood donation drive was held at blood bank Tata Medical Center, Kolkata
            </p>
            <a href="https://tmckolkata.com/in/world-blood-donor-day/" target="_blank">Click here to know more</a>
          </div>
        </div>
        <div className="container event">
          <img src="upeve2.png" alt="event1" className="upImg" />
          <div className="upDetails">
            <h2 className="upHead">Get a $15 Gift Card!</h2>
            <span className="upDate">Date: June 10-30, 2024</span>
            <h4 className="upLine">Get a $15 Gift Card for Donating Blood! By Red Cross Society</h4>
            <p className="para">
              Good things happen when you give blood! You’ll feel good knowing your donation can help save a life. Schedule your blood, platelet or AB Elite plasma donation today.
            </p>
            <a href="https://www.redcrossblood.org/local-homepage/events/do-good.html" target="_blank">Click here to know more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent