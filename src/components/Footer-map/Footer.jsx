import "./Footer.css";
import GithubImage from "./githubImage";

function Footer() {
  return (
    <div className="footer-bar">
      <GithubImage />
      <ul className="links">
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">About Us</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Contact</a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
