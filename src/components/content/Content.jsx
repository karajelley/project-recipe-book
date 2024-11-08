import Data from "../Recipe-data/RecipeData";

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
