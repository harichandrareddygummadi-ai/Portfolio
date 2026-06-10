import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hello, I'm Hari Chandra</h1>
          <h2>Frontend Developer</h2>
          <p>
            I build modern, responsive and user-friendly web applications.
          </p>

          <button>Download Resume</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm a passionate web developer skilled in React, JavaScript,
          HTML, CSS, Java, and Python. I enjoy creating beautiful
          user experiences and solving real-world problems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
          <div className="card">Java</div>
          <div className="card">Python</div>
          <div className="card">SQL</div>
          <div className="card">Git</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-card">
            <h3>Smart Traffic Signal System</h3>
            <p>
              Intelligent traffic management using DSA concepts such as
              Segment Trees, Priority Queues and Graph Algorithms.
            </p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              Responsive personal portfolio built using React and CSS.
            </p>
          </div>

          <div className="project-card">
            <h3>Weather App</h3>
            <p>
              Real-time weather forecasting application using APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <p>Email: harichandra@example.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </section>
    </>
  );
}

export default App;