import "./SideBar.css";
import { NavLink, Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar-container">
            <ul className="side-bar-items">
                <NavLink to="/">All Recipes</NavLink>
                <NavLink to="/CreateRecipe">Create Recipe</NavLink>
                <NavLink to="/About">About us</NavLink>
            </ul>
        </div>
    )
}

export default SideBar;