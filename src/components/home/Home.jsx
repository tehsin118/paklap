import React, { useEffect } from "react";
import { useState } from "react";
import "./home.scss";
import { auth } from "../../config/firebase-config";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
    navigate("/");
  };

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((user) => {
      if (user == null) {
        navigate("/login");
      }
      if (user) {
        const uid = user.uid;
        const email = user.email;

        setUser(user.email);
      } else {
        console.log("user signed out");
      }
    });
    return checkUser;
  }, []);

  return (
    <div>
      <Navbar />
      <section className="home-page">
        <h3>Welcome: {user && user.split("@")[0]}</h3>
        <div className="lap-products">
          <div className="product-card">
            <div className="card-header">
              <img src="\assets\images\card1.png" alt="" />
            </div>
            <div className="card-details">
              <div>
                <h6>lenovo t450</h6>
                <h6>
                  Price: <span>81000</span>
                </h6>
              </div>
              <h6>type: used</h6>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
