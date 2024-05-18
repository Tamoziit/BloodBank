import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Donate from "./pages/donate/Donate";
import FindBlood from "./pages/find/FindBlood";
import Consult from "./pages/consult/Consult";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";

const App = () => {
  const {authUser} = useAuthContext();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path="/donate" element={authUser ? <Donate /> : <Navigate to="/login" />} />
        <Route path="/find" element={authUser ? <FindBlood /> : <Navigate to="/login" />} />
        <Route path="/consult" element={authUser ? <Consult /> : <Navigate to="/login" />} />
        <Route path="/about" element={authUser ? <About /> : <Navigate to="/login" />} />
        <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
