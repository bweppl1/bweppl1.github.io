import ProjectCard from "../components/ProjectCard";
import northAtelier from "../assets/images/north_atelier.png";
import toddlerLearning from "../assets/images/toddler_learning.png";
import clozeEncounters from "../assets/images/cloze_encounters.png";
import heartDisease from "../assets/images/heart_disease.png";

const projects = [
  {
    title: "E-commerce Store",
    description:
      "Created for a leatherworking business. Authentication & Cart system.",
    tech: "React(TypeScript), Node.js, Supabase Auth & PostgreSQL",
    image: northAtelier,
    github: "https://north-atelier.vercel.app/",
    link: "https://north-atelier.vercel.app/",
  },
  {
    title: "Toddler Learning Web-App",
    description:
      "Customizable learning games for kids. Made with the MERN stack.",
    tech: "React(JavaScript), Node.js, Express, MongoDB, Vercel",
    image: toddlerLearning,
    github: "https://github.com/bweppl1/toddler-learning-games",
    link: "https://toddler-learning-games.vercel.app/",
  },
  {
    title: "Cloze Encounters",
    description: "Spanish learning app using cloze-style questions.",
    tech: "React(JavaScript), Node.js, Express, MongoDB",
    image: clozeEncounters,
    github: "https://github.com/bweppl1/cloze-app2",
    link: "https://github.com/bweppl1/cloze-app2",
  },
  {
    title: "Heart Disease Predictor",
    description:
      "Machine learning model to predict heart disease based on user input",
    tech: "Python, Pandas, Scikit-learn, Streamlit",
    image: heartDisease,
    github: "https://github.com/bweppl1/heart_disease_app/",
    link: "https://heartdiseaseapp-gbjfbr6jmifilrxuk7mcrr.streamlit.app/",
  },
];

const Home = () => {
  return (
    <div className="pt-14 flex flex-col max-w-screen-lg mx-auto mt-2 px-2">
      <h2 id="about" className="bg-black text-white px-2 w-fit">
        about_me
      </h2>
      <div className="flex flex-col gap-4 border-1 border-black leading-5 p-3 text-lg mb-4">
        <p>
          I'm a fullstack developer with a Bachelor's Degree in Computer
          Science. I enjoy creating software that increases efficiency, assists
          with learning, or provides insights through data analysis and machine
          learning.
        </p>
        <p>
          I'm created projects to assist with physician decision making when
          considering diagnostic cardiac catheterization, assist language
          learners in the early stages of vocabulary building and teaching
          toddlers to spell and type. Check out my projects below, as well as my
          blog to see what I'm currently learning and working on!
        </p>
      </div>
      <h2 id="projects" className="bg-black text-white px-2 w-fit">
        projects
      </h2>
      <div className="flex flex-col md:flex-wrap md:flex-row gap-4 justify-evenly border-1 border-black leading-5 p-3 text-lg mb-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
