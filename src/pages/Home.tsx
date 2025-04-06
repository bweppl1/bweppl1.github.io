import React from 'react';

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
              <p className="card-text">Short description of the project or blog post.</p>
              <a href="/projects" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Short description of the project or blog post.</p>
              <a href="/projects" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Short description of the project or blog post.</p>
              <a href="/projects" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me / Skills Section */}
      <section className="mb-4">
        <h2>About Me</h2>
        <p>
          Brief intro about yourself, your background, and what you do.
        </p>
        <h3>Skills & Experience</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Experience: Description of your experience in tech, or relevant industries.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
