import React, { useState } from "react";
import "./login.scss";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config";
const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      saveuser();
      setRegisterEmail("");
      setRegisterPassword("");
      navigate("/");
    } catch (error) {
      console.log("Email or password wrong" + error.message);
      toast("Already Registered");
    }
  };

  async function saveuser() {
    try {
      console.log("save user function called");
      const docRef = await addDoc(collection(db, "users"), {
        Useremail: registerEmail,
        Userpassword: registerPassword,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <div className="signup">
        <h3>Sign Up</h3>
        <div className="inp">
          <input
            type="email"
            placeholder="Email...."
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
          <input
            type="pasword"
            placeholder="Password...."
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <button onClick={register}>Signup</button>
        </div>
        <div className="alread">
          <p>Alread Have an Account?</p>
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
