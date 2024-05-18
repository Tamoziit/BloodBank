import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = () => {
        setLoading(true);
        try {
            //const loggedUser = JSON.parse(localStorage.getItem("loggedUsers"));
            localStorage.removeItem("loggedUsers");
            setAuthUser(null);
            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
