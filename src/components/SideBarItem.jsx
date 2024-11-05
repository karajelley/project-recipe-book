import "./SideBarItem.css"; 

function SideBarItem(props) {
    return (
        <div className="sidebar-menu-item active">
            <span>{props.name}</span>
        </div>
    )
}


export default SideBarItem;