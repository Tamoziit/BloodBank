import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useDonate = () => {
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuthContext();

    const donate = ({ fullName, mobileNo, email, age, blood_group, gender, centre }) => {
        const success = handleInputErrors({ fullName, mobileNo, email, age, blood_group, gender, centre })

        if (!success) return;

        setLoading(true);
        let newDonation = null;
        try {
            const donateItem = {
                fullName,
                mobileNo,
                email,
                age,
                blood_group,
                gender,
                centre
            };

            if (authUser.email === email) {
                // local Storage
                const donate = JSON.parse(localStorage.getItem('donate')) || [];

                donate.push(donateItem);
                localStorage.setItem('donate', JSON.stringify(donate));
                toast.success("Appointment Booked. We will contact you shortly.");
                newDonation = donateItem;
            }
            else {
                toast.error("Enter your authenticated email only!");
            }
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
        return newDonation;
    }
    return { loading, donate }
}

export default useDonate


function handleInputErrors({ fullName, mobileNo, email, age, blood_group, gender, centre }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    if (!fullName || !mobileNo || !email || !age || !blood_group || !gender || !centre) {
        toast.error("Please fill all the fields");
        return false;
    }

    if (mobileNo.length !== 10) {
        toast.error("Enter a valid mobile number.");
        return false;
    }

    return true;
}