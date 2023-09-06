import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { auth,signOut } from "../firebaseConfig.js";


const Navbar = () => {
    const userNavigation = useNavigate();
    const [showMediaIcons, setShowMediaIcons] = useState(false);


    const logoutUser = async()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            userNavigation('/')
          }).catch((error) => {
            // An error happened.
            console.log("error",error);
          });
    }




  const user = auth.currentUser;
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>B</span>ehrooz
            <span>K</span>han
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to={'/'}>Register</Link>
            </li>
            <li>
              <Link to={'./login'}>login</Link>
            </li>
            <li>
              <Link to={'./profile'}>Profile</Link>
            </li>
            <li>
             {user ?  (<span onClick={logoutUser}>LogOut</span>): null}
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/behrooz-khan-a003b5237/"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/behrooz-khan-a003b5237/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/behrooz-khan-a003b5237/"
                >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;