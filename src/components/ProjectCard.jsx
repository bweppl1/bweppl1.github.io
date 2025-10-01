import { useState } from "react";
import { FaAngleDown, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  index,
  title,
  description,
  image,
  github,
  link,
  tech,
}) => {
  const toggleCardView = () => {
    const projectCard = document.getElementById(`project-${index}`);
    projectCard.classList.toggle("hidden");
  };

  return (
    <div className="w-full md:w-[31%] border-1 border-black flex flex-col">
      <div
        className="flex justify-between items-center cursor-pointer bg-black text-white px-2"
        onClick={toggleCardView}
      >
        <h1>{`0${index}. ${title}`}</h1>
        <FaAngleDown />
      </div>

      <div id={`project-${index}`} className="flex flex-col gap-2">
        <div className="overflow-hidden border-b-1 border-black">
          <img
            src={image}
            alt={title}
            className="hover:scale-150 transition-all duration-300"
          />
        </div>

        <p className="p-2">{description}</p>
        <p className="p-2">Tech: {tech}</p>
        <div className="flex justify-evenly p-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-2 hover:underline flex justify-center items-center"
          >
            View Project
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-1 border-black px-2 p-1 flex hover:underline"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
