
const About = () => {
  return (
    <div className="container mt-5">
      {/* Introduction Section */}
      <section className="mb-5">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate software developer with a strong
          background in [your field of study/technology]. I specialize in creating
          user-friendly web applications and enjoy learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-5">
        <h3>Skills</h3>
        <ul className="list-group">
          <li className="list-group-item">JavaScript / TypeScript</li>
          <li className="list-group-item">React / React Native</li>
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">Bootstrap / CSS / HTML</li>
          <li className="list-group-item">Git / GitHub</li>
          <li className="list-group-item">SQL / NoSQL</li>
          <li className="list-group-item">Python</li>
          {/* Add or remove skills as needed */}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-5">
        <h3>Experience</h3>
        <p>
          I have worked on several projects involving [briefly describe your experience or projects].
        </p>
        <ul>
          <li>
            <strong>Project 1:</strong> Description of your first project.
          </li>
          <li>
            <strong>Project 2:</strong> Description of your second project.
          </li>
          {/* Add more projects/experience */}
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h3>Contact</h3>
        <p>
          Feel free to get in touch with me for collaboration or just to say hi!
        </p>
        <ul>
          <li>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></li>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourusername</a></li>
          {/* Add other contact info or social links */}
        </ul>
      </section>
    </div>
  );
};

export default About;
