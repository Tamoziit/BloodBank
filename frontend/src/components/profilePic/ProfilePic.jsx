import { useAuthContext } from "../../context/AuthContext";

const ProfilePic = () => {
    const {authUser} = useAuthContext();
    const ProfilePic = authUser.gender === "Male" ? `https://avatar.iran.liara.run/public/boy?username=${authUser.username}` : `https://avatar.iran.liara.run/public/girl?username=${authUser.username}`;

    return (
        <img className="img" src={ProfilePic} />
    )
}

export default ProfilePic