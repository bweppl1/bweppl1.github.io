import '../index.css';

const About = () => {
  const skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java'},
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'React', icon: 'fab fa-react' },,
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Git', icon: 'fab fa-git' },
    { name: 'MongoDB', icon: 'fas fa-database' },
  ];

  return (
    <div className="container mt-2">
      {/* Introduction Section */}
      <section className="mb-1">
        <h2>About Me</h2>
        <p>Hi, I'm Brent Weppler.</p>
      </section>

      {/* Updated Skills Section with 3x3 grid */}
      <section className="mb-1">
        <h3>Skills</h3>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-3 mb-1" key={index}>
              <div className="d-flex align-items-center">
                <i className={`${skill.icon} fa-3x mr-3`} /> {/* Icon */}
                <span className="p-2">{skill.name}</span> {/* Technology Name */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-5">
        <h3>Experience</h3>
        <p>
          I have worked with Python and Java most extensively.
        </p>
        <ul>
          <li>
            <strong>Artificial Intelligence and Machine Learning:</strong> Using a data set of enviornmental and public health data to create and optimize a model that predicts public health scores.
          </li>
          <li>
            <strong>Python Algorithms:</strong> Created a python program to simulate a delivery service. Routed optimized pathing for a simulated delivery service to meet all constraints and delivery deadlines.
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
