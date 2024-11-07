import Data from "../Recipe-data/RecipeData";
import SideBar from "../Side-Bar/SideBar";
import "../content/Content.css";

function Content() {
  return (
    <div className="content-container">
      <SideBar />
      <Data />
    </div>
  );
}

export default Content;
