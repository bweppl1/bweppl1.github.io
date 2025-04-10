import { Link } from "react-router-dom";
import '../index.css';

const Home = () => {
  return (
    <div className="container">
      {/* Project/Blog Preview Section */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description.</p>
              <Link to="/projects" className="btn btn-primary">View Project</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description.</p>
              <Link to="/projects" className="btn btn-primary">View Project</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description.</p>
              <Link to="/projects" className="btn btn-primary">View Project</Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Me / Skills Section */}
      <section className="mb-4">
        <h2>About Me</h2>
        <p>
          Brief about me.
        </p>
        <h3>Skills & Experience</h3>
        <ul>
          <li>Full Stack Development</li>
          <li>Machine Learning</li>
          <li>Database Management</li>
          <li>Experience: 404</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
