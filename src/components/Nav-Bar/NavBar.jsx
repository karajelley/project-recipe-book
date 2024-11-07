
import "./Navbar.css";
import appLogo from "/src/assets/app-logo.png";

const Navbar = () => {


    return (
        <nav className="navbar">
            <div className='app-logo'>
                <img src={appLogo} alt="App Logo" width="250" />
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
