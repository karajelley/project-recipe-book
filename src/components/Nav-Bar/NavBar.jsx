import "./NavBar.css";
import appLogo from "/src/assets/app-logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="app-logo">
        <NavLink to="/">
          <img src={appLogo} alt="App Logo" width="250" />
        </NavLink>
      </div>
      <ul className="navbar-links">
        {/* This ul is not necessary, the li is also empty, consider removing them */}
        <li>
          {/*                     <NavLink to="/About">Contact</NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
