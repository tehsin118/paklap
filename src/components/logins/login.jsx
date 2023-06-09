import React, { useEffect, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (loginEmail == "" || loginPassword == "") {
      toast.error("Fields are empty");
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        setLoginEmail("");
        setLoginPassword("");
        navigate("/");
      } catch (error) {
        toast("Email or password wrong");
        console.log("Email or password wrong" + error.message);
      }
    }
  };

  return (
    <div>
      <div className="signup">
        <h3>Login</h3>

        <div className="inp">
          <input
            type="email"
            placeholder="Email...."
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password...."
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <button onClick={login}>Login</button>
        </div>

        <div className="alread">
          <p>Don't have an account?</p>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
