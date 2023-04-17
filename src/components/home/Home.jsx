import React, { useEffect } from "react";
import { useState } from "react";
import "./home.scss";
import { auth } from "../../config/firebase-config";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  function UpdateUserName() {
    updateProfile(auth.currentUser, {
      displayName: "hello",
    })
      .then((res) => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
    navigate("/");
  };
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  return (
    <div>
      <section className="home-page">
        <Navbar />
        <h3>Home page</h3>
        <h3>{user.displayName}</h3>

        <input
          type="email"
          placeholder="Email...."
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <button onClick={UpdateUserName}>update name</button>
        <div className="inp">
          <button onClick={logout}>logout</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
