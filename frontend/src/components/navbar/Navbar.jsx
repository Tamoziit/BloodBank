import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout.js";
import "./Navbar.css";
import ProfilePic from "../profilePic/ProfilePic.jsx";

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();
    

    return (
        <div className="header">
            <div className="container logo">
                <img src="bloodDrop.png" />
                <h3>Red Hope</h3>
            </div>
            <div className="options">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/donate">Donate</Link>
                <Link className="link" to="/find">Find Blood</Link>
                <Link className="link" to="/consult">Consult</Link>
                <Link className="link" to="/about">About</Link>
            </div>
            <div className="container profile">
                <ProfilePic />
                <Link className="link" to="/profile">{authUser.username}</Link>
                <button className="btn btnLogout" onClick={logout} disabled={loading}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar