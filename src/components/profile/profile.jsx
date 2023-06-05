import React, { useState, useEffect } from "react";

import "./profile.scss";
import Navbar from "../navbar/Navbar";
import { db, auth } from "../../config/firebase-config";
import {
  onAuthStateChanged,
  updateEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  setDoc,
  query,
  where,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((user) => {
      if (user == null) {
        navigate("/login");
      }
      if (user) {
        const email = user.email;

        setUser(user.email);
      } else {
        console.log("user signed out");
      }
    });
    return checkUser;
  }, []);

  const updateUser = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "users"),
          where("Useremail", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setDoc(
            doc.ref,
            {
              Name: userName,
              Useremail: userMail,
              Phone: userPhone,
            },
            { merge: true }
          );
          // toast.done("User Data Updated");
          console.log("user data update");
        });
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("data update error:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <section className="profile">
        <div className="profile-head">
          <h3>Profile</h3>
          <label htmlFor="up">
            <img src="\assets\images\profile.png" alt="user profile image" />
          </label>
          <h3>Welcome: {user && user.split("@")[0]}</h3>

          <input type="file" name="" id="up" />
          <button>Update Image</button>
        </div>

        <div className="user-detail">
          <div>
            <h6>Name:</h6>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <h6>Email:</h6>
            <input type="email" onChange={(e) => setUserMail(e.target.value)} />
          </div>
          <div>
            <h6>Phone No:</h6>
            <input
              type="phone"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
          <div>
            <button onClick={updateUser}>Save</button>
            <button>Log out</button>
          </div>
        </div>

        <hr />
        {/* Add Product */}
        <h3>Add new product</h3>

        <hr />
      </section>
    </div>
  );
};

export default Profile;

/* <div className="user-detail">
  <div>
    <h6>Product Name:</h6>
    <input type="text" />
  </div>
  <div>
    <h6>Price:</h6>
    <input type="number" />
  </div>
  <div>
    <h6>Quantity:</h6>
    <input type="number" />
  </div>
  <div>
    <h6>Category:</h6>
    <div className="category">
      <label htmlFor="used">Used</label>
      <input type="radio" id="used" name="productCategory" />
      <label htmlFor="new">new</label>
      <input type="radio" id="new" name="productCategory" />
    </div>
  </div>
  <div>
    <h6>File:</h6>
    <input type="file" />
  </div>

  <div>
    <h6>Detail:</h6>
    <textarea name="" id="" rows="3" className="textarea" />
  </div>
  <div>
    <button>Save</button>
  </div>
</div>; */
