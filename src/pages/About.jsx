import '../index.css';

const About = () => {
  return (
    <div className="container mt-5">
      {/* Introduction Section */}
      <section className="mb-5">
        <h2>About Me</h2>
        <p>
          Hi, I'm Brent Weppler.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-1">
        <h3>Strong Skills</h3>
        <ul className="list-group">
          <li className="list-group-item">Python</li>
          <li className="list-group-item">Java</li>
          <li className="list-group-item">Git / GitHub</li>
          <li className="list-group-item">Linux / Windows / Android</li>
        </ul>
        <h3>Developing Skills</h3>
        <ul className="list-group">
          <li className="list-group-item">HTML / CSS / JavaScript / Bootstrap</li>
          <li className="list-group-item">Spring Boot</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">SQL / NoSQL</li>
        </ul>
      </section>



      {/* Experience Section */}
      <section className="mb-5">
        <h3>Experience</h3>
        <p>
          I have worked with Python and Java most extensively.
        </p>
        <ul>
          <li>
            <strong>Project 1:</strong> Description of your project 1.
          </li>
          <li>
            <strong>Project 2:</strong> Description of your project 2.
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
          <li>Email: <a href="mailto:brentweppler@gmail.com">brentweppler@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/bweppl1" target="_blank" rel="noopener noreferrer">github.com/bweppl1</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/brent-weppler" target="_blank" rel="noopener noreferrer">linkedin.com/in/brent-weppler</a></li>
          {/* Add other contact info or social links */}
        </ul>
      </section>
    </div>
  );
};

export default About;
