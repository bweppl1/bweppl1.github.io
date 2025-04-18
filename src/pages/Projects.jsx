import { Link } from "react-router-dom";
import '../index.css';

const Projects = () => {
  const projects = [
    {
      title: 'Delivery Algorithm',
      description: 'A Python program that simulates package delivery to challenge the TSP.',
      technologies: ['Python'],
      link: 'https://github.com/bweppl1/C950',
      //image: '/public/images/project_01_thumbnail.png',
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/yourusername/project2', // Replace with actual link
    },
    {
      title: 'Project 3',
      description: 'A brief description of your third project.',
      technologies: ['React', 'TypeScript', 'CSS'],
      link: 'https://github.com/yourusername/project3', // Replace with actual link
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mt-2">
      <h2>Projects</h2>
      <p>Here are some of the projects I have worked on:</p>

      {/* Projects Grid */}
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p>
                  <strong>Technologies:</strong>
                  <ul>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
