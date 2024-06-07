import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { MdLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout.js";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import ProfilePic from "../profilePic/ProfilePic.jsx";
import { useState } from "react";

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();
    const [showMediaIcon, setShowMediaIcon] = useState(false);

    return (
        <div className="header">
            <div className="container logo">
                <img src="bloodDrop.png" />
                <h3>
                    <span>R</span>ed
                    <span>H</span>ope
                </h3>
            </div>
            <div className={showMediaIcon ? "mobile-options" : "options"}>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/donate">Donate</Link>
                <Link className="link" to="/find">Find Blood</Link>
                <Link className="link" to="/consult">Consult</Link>
                <Link className="link" to="/about">About</Link>
            </div>
            <div className="container profile">
                <ProfilePic />
                <Link className="link" to="/profile">{authUser.username}</Link>
                <button className="btnLogout" onClick={logout} disabled={loading}><MdLogout /></button>
                <button className="menu-icon btnLogout" onClick={() => setShowMediaIcon(!showMediaIcon)}><GiHamburgerMenu />
                </button>
            </div>
        </div>
    )
}

export default Navbar