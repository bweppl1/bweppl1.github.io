import { useState } from "react";

const LogEntry = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto mt-2 px-2">
      <h2 className="bg-black text-white px-2 w-fit">
        Sunday, November 9, 2025
      </h2>
      <div className="flex flex-col gap-4 border-1 border-black leading-5 p-3 text-lg mb-4">
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
