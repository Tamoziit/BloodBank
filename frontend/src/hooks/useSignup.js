import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();


    const signup = ({ fullName, username, password, confirmPassword, mobileNo, email, age, bloodGroup, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, mobileNo, email, age, bloodGroup,  gender })

        if (!success) return;

        setLoading(true);
        try {
            const user = {
                fullName,
                username,
                password,
                confirmPassword,
                mobileNo,
                email,
                age,
                bloodGroup,
                gender,
            };

            // local Storage
            const localusers = JSON.parse(localStorage.getItem('users')) || [];

            const userFind = localusers.find(u => u.username === username && u.password === password);
            const usernameFind = localusers.find(u => u.username === username);

            if (userFind) {
                toast.error("User Already exists");
            }
            else if (usernameFind) {
                toast.error("Username already exists, try another one...");
            }
            else {
                localusers.push(user);
                localStorage.setItem('users', JSON.stringify(localusers));
                const loggedUser = JSON.parse(localStorage.getItem("loggedUsers"));
                if (!loggedUser) {
                    localStorage.setItem('loggedUsers', JSON.stringify(user));
                }
                //context
                setAuthUser(user);
                toast.success("Signed Up successfully. Welcome to the Community!");
            }
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, signup }
}

export default useSignup


function handleInputErrors({ fullName, username, password, confirmPassword, mobileNo, email, age, bloodGroup, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !mobileNo || !email || !age || !bloodGroup || !gender) {
        toast.error("Please fill all the fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be of atleast 6 characters");
        return false;
    }

    if (mobileNo.length !== 10) {
        toast.error("Enter a valid mobile number.");
        return false;
    }
    return true;
}