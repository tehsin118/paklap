import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/logins/login";
import Signup from "./components/logins/signup";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
