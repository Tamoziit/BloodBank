import Navbar from "../../components/navbar/Navbar";
import "./About.css";
import { BsLinkedin } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <div className="container about">
    <Navbar />
    <div className="container sec1">
      <div className="wel">
        <span className="h1">Welcome</span>
        <span className="h2">to our initiative</span>
        <span className="h3">Red Hope</span>
      </div>
      <div className="container subsec">
        <span className="collab">In collaboration with Birsa Institute of Technology, Sindri</span>
        <div className="mission">
          <span className="head1">Our Mission</span>
          <ul className="list">
            <li><b>Save Lives:</b> Provide a reliable and continuous supply of safe blood to save lives and improve health outcomes</li>
            <li><b>Promote Awareness:</b> Increase public awareness about the importance of blood donation and the constant need for donations.</li>
            <li><b>Ensure Safety:</b> Maintain the highest standards of safety and quality in blood collection, testing, processing, and distribution.</li>
            <li><b>Encourage Volunteerism:</b> Foster a community spirit of volunteerism and altruism through blood donation drives and events.</li>
            <li><b>Expand Accessibility:</b> Ensure that blood donation opportunities are accessible to diverse and underserved populations.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="sec2">
      <span className="head2">Our Achievements</span>
      <ul className="list2">
        <li><b>Lifesaving Donations:</b> Collected over 50,000 units of blood, contributing to the saving of approximately 150,000 lives.</li>
        <li><b>Expanded Donor Base:</b> Grown our donor base to over 20,000 active donors, with a 30% increase in repeat donors.</li>
        <li><b>Innovative Technology:</b> Implemented cutting-edge technology for blood collection and testing, reducing processing times by 40%.</li>
        <li><b>Community Outreach:</b> Conducted over 500 community blood drives, significantly raising awareness and participation in blood donation.</li>
        <li><b>Recognition and Awards:</b> Received multiple awards for our contributions to public health and community service, including the National Health Service Award in 2023.</li>
        <li><b>Partnerships Established:</b> Formed strategic partnerships with over 100 hospitals and healthcare providers, ensuring efficient distribution of blood products.</li>
        <li><b>Diverse Donor Inclusion:</b> Successfully targeted and included diverse and underserved populations, with a 25% increase in minority donors.</li>
      </ul>
    </div>
    <div className="footer">
      <div className="container aboutProfile">
        <img src="https://avatar.iran.liara.run/public/boy?username=Tamojit Das" alt="Tamojit Das" />
        <div className="aboutDetails">
          <h3>Tamojit Das</h3>
          {isMobile ? (
              <>
                <a href="https://www.linkedin.com/in/tamojit-das-b77b62293" target="_blank"><BsLinkedin /></a>
                <a href="mailto:tamojitdas181007@gmail.com" target="_blank"><IoMailSharp /></a>
              </>
            ) : (
              <>
                <a href="https://www.linkedin.com/in/tamojit-das-b77b62293" target="_blank"><BsLinkedin /> LinkedIn</a>
                <a href="mailto:tamojitdas181007@gmail.com" target="_blank"><IoMailSharp /> tamojitdas181007@gmail.com</a>
              </>
            )}
        </div>
      </div>
      <h1>Connect with us</h1>
      <div className="container aboutProfile">
        <div className="aboutDetails">
          <h3>Sagnik Basak</h3>
          {isMobile ? (
              <>
                <a href="https://www.linkedin.com/in/sagnik-basak-087782281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><BsLinkedin /></a>
                <a href="mailto:basaksagnik805@gmail.com" target="_blank"><IoMailSharp /></a>
              </>
            ) : (
              <>
                <a href="https://www.linkedin.com/in/sagnik-basak-087782281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><BsLinkedin /> LinkedIn</a>
                <a href="mailto:basaksagnik805@gmail.com" target="_blank"><IoMailSharp /> basaksagnik805@gmail.com</a>
              </>
            )}
        </div>
        <img src="https://avatar.iran.liara.run/public/boy?username=Sagnik Basak" alt="Sagnik Basak" />
      </div>
    </div>
  </div>
  )
}

export default About