import { useState } from "react";
import "./Header.css";
import HomeIcon from "../../assets/Home.svg";
import Avatar from "../../assets/avatar.jpg";
import MMEELogo from "../../assets/MMEE_Logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo"><img src={MMEELogo} alt="MMEE" height={50} width={250} /></div>

      <nav className="menu">
        <a href="#"><img src={HomeIcon} alt="home" height={25} width={30} /></a>
        <span><a href="#">Testimonials</a></span>
        <span><a href="#">Star Performers</a></span>
        <span><a href="#">Contact</a></span>
        <span><a href="#">About</a></span>
        <span><a href="#">Help</a></span>
      </nav>

      {/* RIGHT SECTION */}
      <div className="header-right">
        <button className="host-btn" onClick={() => navigate("/service-provider")}>Switch to Host</button>

        <div className="avatar-wrapper">
          <img
            src={Avatar}
            alt="avatar"
            className="avatar"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <ul className="dropdown-login-menu">
              <li>Login</li>
              <li>Sign Up</li>
              <li>Profile</li>
              <li>Change Password</li>
              <li>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
