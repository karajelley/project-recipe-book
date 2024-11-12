import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Recipe Book app, a simple yet powerful single-page
        application built with React. This app allows users to easily create,
        manage, and explore their favorite recipes. Users can add, update, and
        delete recipes, keeping all their culinary ideas in one convenient
        location.
        <br />
        <br></br>
        The app is designed to be user-friendly, with an intuitive interface
        that makes it easy to navigate and interact with recipes. Built with
        core React concepts such as state management and component-based
        architecture, this project demonstrates how React can be used to create
        dynamic and interactive web applications.
      </p>
      <div className="team-section">
        <div className="team-card">
          <img
            className="member-img"
            src="src/assets/Headshot Round.png"
            alt=""
          />
          <h2>Kara Jelley</h2>
          <p>
            Hi, I'm Kara, a UX/UI designer with a strong interest in full-stack
            development and a growing skill set in React. I enjoy creating
            user-centered designs and balancing aesthetics with functionality to
            build intuitive interfaces. Currently, I'm building my coding skills
            to bring my design ideas to life. I'm excited to work on this
            project and collaborate with the team!
          </p>
          <div className="button-div">
            <button
              onClick={() =>
                (window.location.href = "https://github.com/karajelley")
              }
            >
              <img src="src/assets/github-icon-100px.png" alt="Github Logo" />
            </button>
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/karajelley/")
              }
            >
              <img
                src="src/assets/linkedin-icon-100px.png"
                alt="Linkedin Logo"
              />
            </button>
          </div>
        </div>
        <div className="team-card">
          <img className="member-img" src="src/assets/piet-image.png" alt="" />
          <h2>Piet-Hein Schouten</h2>
          <p>
            I'm currently diving into web development with a strong interest in
            building dynamic and responsive websites. With a passion for
            learning new technologies, I'm excited to grow my skills and
            collaborate with my teammates on this project. I'm especially
            looking forward to gaining more experience in full-stack development
            and contributing to creating a seamless user experience.
          </p>
          <div className="button-div">
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href = "https://github.com/phsworks")
              }
            >
              <img src="src/assets/github-icon-100px.png" alt="Github Logo" />
            </button>
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/piet-hein-schouten-4a2b451bb/")
              }
            >
              <img
                src="src/assets/linkedin-icon-100px.png"
                alt="Linkedin Logo"
              />
            </button>
          </div>
        </div>
        <div className="team-card">
          <img className="member-img" src="src/assets/user-image.png" alt="" />
          <h2>Diego Cisneros</h2>
          <p>
            As an aspiring web developer, I'm diving into this course to expand
            my knowledge and practical skills in full-stack development. I'm
            interested in building functional, responsive websites and looking
            forward to applying what I've learned in this project. Working with
            a team and seeing how different skills come together is something
            I'm really excited about.
          </p>
          <div className="button-div">
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href = "https://github.com/Kasper1-2")
              }
            >
              <img src="src/assets/github-icon-100px.png" alt="Github Logo" />
            </button>
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/dfcisnerosg/")
              }
            >
              <img
                src="src/assets/linkedin-icon-100px.png"
                alt="Linkedin Logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
