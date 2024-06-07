import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import bcrypt from "bcryptjs";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors({ username, password })
        if (!success) return;

        setLoading(true);
        try {
            const users = JSON.parse(localStorage.getItem("users"));
            
            if (users) {
                const user = users.find(u => u.username === username);
                const isPasswordCorrect = await bcrypt.compare(password, user.password || "");
                if (user && isPasswordCorrect) {
                    toast.success("Logged in successfully!");
                    const loggedUser = JSON.parse(localStorage.getItem("loggedUsers"));
                    if (!loggedUser) {
                        localStorage.setItem('loggedUsers', JSON.stringify(user));
                    }
                    setAuthUser(user);
                }
                else {
                    toast.error("Inavlid Login Credentials")
                }
            }
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    // eslint-disable-next-line no-undef
    return { loading, login };
}

export default useLogin



function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill all the fields");
        return false;
    }

    return true;
}