import "./SideBar.css"; 
import SideBarItem from "./SideBarItem";

function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="item-container">
            <SideBarItem name="Recipes"/>
            <SideBarItem name="Create Recipe"/>
            <SideBarItem name="About Us"/>
            </div>
        </div>
    )
}

export default SideBar;