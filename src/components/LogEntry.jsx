import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const LogEntry = () => {
  const handleToggleBlogWindow = () => {
    const blogWindow = document.getElementById("blog1");
    blogWindow.classList.toggle("hidden");
  };
  const [title, setTitle] = useState("");
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-2 px-2">
      <h2 className="bg-black text-white px-2 w-fit flex">
        Sunday, December 21, 2025
        <FaAngleDown onClick={handleToggleBlogWindow} />
      </h2>
      <div
        id="blog2"
        className="flex flex-col gap-4 border border-black leading-5 p-3 text-lg mb-4"
      >
        <p>
          This week I created a React Frontend for my Python FastAPI
          ClozeEncounters. I finished the MVP just before coming to write this.
          This was my first time not using Node.js for a React app backend. I do
          prefer working with Python in the backend and I think I'll do it more
          in the future. I do want to build out a few more features before I
          build the database up from 100 words to 500 and then I'll deploy a
          live version. This project has given me a lot better understanding of
          APIs, PostgreSQL, and I've enjoyed learning about Pydantic and
          SQLAlchemy.
        </p>
        <p>
          My goal for this week is to deploy the MVP of my React/FastAPI
          ClozeEncounters to display on my portfolio, and apply for a couple job
          postings that interest me.
        </p>
      </div>
      <h2 className="bg-black text-white px-2 w-fit flex">
        Monday, December 15, 2025
        <FaAngleDown onClick={handleToggleBlogWindow} />
      </h2>
      <div
        id="blog2"
        className="flex flex-col gap-4 border border-black leading-5 p-3 text-lg mb-4"
      >
        <p>
          It's been a busy holiday season! However, I've completed the MVP of
          the Python version of ClozeEncounters using FastAPI and PostgreSQL. I
          will likely build a few more features and then decide on how to
          convert it into a useable application. Currently, being a CLI based
          frontend, it isn't all that usable for a non-technical person. I'll
          have to do more reading and decide if I'll build a React frontend for
          this Python backend or rebuild the old, original NodeJS backend. In
          the end I want this application to be a free, easy to use, tool for
          people who want to learn Spanish.
        </p>
        <p>
          I've spent a good portion of my after-work "programming time" working
          on the job hunt, adjusting my resume and applying to jobs. I know I'll
          have to focus more on this if I want to get my first developer
          position. There were a few jobs this week that took over an hour to
          apply to. Between cleaning my resume, writing a custom Cover Letter
          for the position, and completing multiple paragraph style application
          questions. I do wonder if that time is better spent just learning. I
          can't get a job if I don't apply, and I won't get a job if I don't
          spend time learning. I'll definitely have to search for a better
          balance in the future!
        </p>
        <p>
          Over the holiday season I'll work on the last few features I want to
          complete for the Python ClozeEncounters, and I would really like to
          spend some time working on Advent of Code, it seems like a fun way to
          practice my Python outside of the work I've been doing on my personal
          projects!
        </p>
      </div>
      <h2 className="bg-black text-white px-2 w-fit flex">
        Sunday, November 30, 2025
        <FaAngleDown onClick={handleToggleBlogWindow} />
      </h2>
      <div
        id="blog2"
        className="flex flex-col gap-4 border border-black leading-5 p-3 text-lg mb-4"
      >
        <p>
          Sick the majority of this week. Read some more OSTEP. Worked on a
          FastAPI and PostgreSQL version of ClozeEncounters. I wanted to make a
          spaced repetition algorithm myself, and since I've been doing a lot of
          algorithm problems in Python I decided to make the whole application
          in Python this time. Once it's fleshed out more I may add a React
          front end, but currently I'm using a CLI with the Rich package and I
          enjoy the workflow so much more.
        </p>
        <p>
          Goal for this week is to finish reading OSTEP, work on my Python
          project 2-3 nights, and work on Blind75 problems every night I'm not
          working on the project.
        </p>
      </div>
      <h2 className="bg-black text-white px-2 w-fit flex">
        Sunday, November 24, 2025
        <FaAngleDown onClick={handleToggleBlogWindow} />
      </h2>
      <div
        id="blog2"
        className="flex flex-col gap-4 border border-black leading-5 p-3 text-lg mb-4"
      >
        <p>
          Continuing to work through Blind 75 this week, spending time each day
          studying the problems, and knocking rust off my python. I solved my
          first hard leetcode yesterday, only to get stumped by an easy
          immediately after. I blame it on being tired after a weekend of late
          night with the sick kiddos, for sure that's why.. definitely..
        </p>
        <p>
          Nearly finished reading OSTEP, I want to make sure I retain as much as
          I can from this book. What an amazing read it's been so far. I have to
          be sure to go over my notes and revisit the core ideas from each
          section before continuing on to the next book.
        </p>
        <p>
          I will focus a section of my nights on cleaning up this portfolio and
          my project READMEs, as I think they are currently doing a poor job of
          presenting my projects to viewers. Going forward I may turn these
          programmer logs into more point form. Have to optimize time!
        </p>
      </div>
      <h2 className="bg-black text-white px-2 w-fit flex">
        Sunday, November 16, 2025
        <FaAngleDown onClick={handleToggleBlogWindow} />
      </h2>
      <div
        id="blog2"
        className="flex flex-col gap-4 border border-black leading-5 p-3 text-lg mb-4"
      >
        <p>
          This week working I've spent most nights working through the 3rd
          "step" of OSTEP. Reading about data persistence, file systems, and the
          history of how we arrived at modern storage systems. Some refreshers
          on what I learned in the Linux Essentials course at WGU.
        </p>
        <p>
          Coding-wise I'm reworking through Blind 75 on NeetCode this time
          focusing more on optimizing my solutions, rather than just solving the
          problems. I want to make sure I complete the entirety of Blind 75 with
          optimal solutions. I have never completed a hard leetcode problem
          before.
        </p>
        <p>
          This week is a lot of focus on learning, and not so much building, I
          want to make sure I start to build a little bit next week. It's going
          to be important to stay consistent, working on something everyday, to
          balance all the tasks I need to!
        </p>
      </div>
      <h2 className="bg-black text-white px-2 w-fit flex">
        Sunday, November 9, 2025
        <FaAngleDown onClick={handleToggleBlogWindow} />
      </h2>
      <div
        id="blog1"
        className="flex flex-col gap-4 border border-black leading-5 p-3 text-lg mb-4"
      >
        <p>
          Starting a log to track my work and development as a software
          developer. Currently I split my time fairly evenly between two
          focuses:
        </p>
        <h2 className="text-xl underline">PRACTISING</h2>
        <p>
          After weeks of working on React projects within Cursor, I decided to
          take on a challenge that would allow me to tackle 2 birds with 1
          stone. This task came with a bonus revalation that has completely
          changed the course of my learning. First, I decided to create a React
          web app without using any AI. Secondly, I decided to try to learn
          Neovim. A perfect combo as Neovim would remove many of the AI tools I
          had been using and force me to depend on myself.
        </p>
        <p>
          Within Cursor I was not generating large blocks of code with AI, but I
          was using tab completions and suggestions frequently. I quickly
          realized how much I had depended on the tab completions, as I was
          unable to create the proper boilerplate code for a React component,
          which I had done within cursor close to 100 times at this point. So I
          have been building a Typing Test in React using Neovim for the last
          few weeks.
        </p>
        <p>
          Neovim is an absolute blast, I've spent a few late nights getting my
          config to where it is. After about 2 weeks I do believe I am at least
          as productive as I would be in a normal text editor. The lack of AI
          features has allowed me to drill into my head the syntax that I have
          been forgetting as I lean on AI. The result of this endevour is that I
          have fully moved to Neovim and no longer program at all in VSCode or
          Cursor. I believe as a junior software developer it's going to be
          important for me to not be dependent on AI as I develop my foundation.
          I continue to use AI in the manner I did prior to Cursor, which is to
          ask questions, bounce ideas off of, etc. But for now I'm loving the
          experience of fully typing my application within Neovim.
        </p>
        <h2 className="text-xl underline">LEARNING</h2>
        <p>
          The other half of my time is focuses solely on learning. I am
          continuing to read through Operation Systems: Three Easy Pieces. I'm
          enjoying in thoroughly and have finished the first of the 'three
          pieces'. Currently reading through Concurrency. The information I
          learn through this book has helped me even as I practice my React
          skills. For example with my Typing Test I was having problems getting
          consistently accurate WPM calculations at the conclusion of tests.
          After reading the first couple of chapters on concurrency, I see that
          I've done a few things inefficiently and have plans to rework the app
          during this week.
        </p>
        <p>
          My plan going forward with these programmer logs is to be much more
          concise, touching only on the highlights of my week. I felt as the
          initial kick off that I should explain how I currently spend my time
          outside of work and family time.
        </p>
      </div>
    </div>
  );
};

export default LogEntry;
