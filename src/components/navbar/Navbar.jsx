import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";
const Navbar = () => {
  const [user, setUser] = useState(null);
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
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg  laptop-navbar">
        <div class="container-fluid ">
          <Link class="navbar-brand" to="/">
            OctaLap
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex align-items-center justify-content-center    "
            id="navbarSupportedContent"
          >
            <h3>{user && user.split("@")[0]}</h3>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/allUser">
                  Users
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">Action</a>
                  </li>

                  {user ? (
                    <li className=" c-pointer">
                      <button class="dropdown-item" onClick={handleLogout}>
                        Log out
                      </button>
                    </li>
                  ) : (
                    <li>
                      <Link class="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/account">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
