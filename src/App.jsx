import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/logins/login";
import Signup from "./components/logins/signup";
import Profile from "./components/profile/profile";
import Users from "./components/user/Users";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web from "./web3/web";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/allUser" element={<Users />} />
      </Routes> */}
      <Web />
    </div>
  );
}

export default App;
