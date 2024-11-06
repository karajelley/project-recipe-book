import RecipeCard from "./RecipeCard";
import SideBar from "./SideBar";
import Data from "./Data";
import "../components/Content.css"

function Content() {


    return (
        <div className="content-container">
            <SideBar />
            <Data />
        </div>
    )
}

export default Content;