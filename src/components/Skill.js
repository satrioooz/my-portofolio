import React from "react";
import Tailwinds from "../images/tailwindcss.svg";
import HTML from "../images/html.svg";
import Redux from "../images/redux-logo-svgrepo-com.svg";
import CSS from "../images/css.svg";
import Linux from "../images/linux.svg";
import Javascript from "../images/javascript.svg";
import Git from "../images/git.svg";
import { AiFillGitlab } from "react-icons/ai";
const Skill = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-full h-1 bg-yellow-400"></div>

        <h1 className="uppercase dark:text-white font-bold text-[2rem] lg:text-[3rem]">
          Skills
        </h1>
        <div className="w-full h-1 bg-yellow-400"></div>
      </div>
      <div className="mx-auto xl:flex m-auto  lg:flex grid md:mx-auto sm:mx-auto  grid-cols-3  lg:flex-row md:flex-row flex-col justify-center lg:justify-center gap-3 w-full">
        {/* HTML */}
        <div className="xl:w-[13%]  lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] flex hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[#FB8027] flex-col justify-center xl:h-[15vh] bg-white p-3  ">
          <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
            <img src={HTML} className="w-full mx-auto" />
          </div>
          <span className="p-0 m-0">HTML</span>
        </div>

        <div className="xl:w-[13%] lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] hover:shadow-[#264DE4]  hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col justify-center xl:h-[15vh] bg-white p-3 ">
          <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
            <img src={CSS} />
          </div>
          <span>CSS</span>
        </div>

        {/* react */}
        <div className="xl:w-[13%] lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] hover:shadow-[#61DBFB] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col justify-center xl:h-[15vh] bg-white p-3 ">
          <div className="w-full mx-auto overflow-hidden flex justify-center">
            <svg
              className="w-14 h-14 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-12 sm:h-12 xl:w-12 xl:h-12"
              viewBox="0 0 128 128"
            >
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
          </div>

          <span>React</span>
        </div>

        {/* REDUX */}
        <div className="xl:w-[13%] lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] hover:shadow-[#764ABC] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col justify-center xl:h-[15vh] bg-white p-3 ">
          <div className="w-full mx-auto overflow-hidden flex justify-center">
            <img src={Redux} />
          </div>

          <span>Redux</span>
        </div>

        <div className="xl:w-[13%] lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[#19B9B9] flex flex-col justify-center xl:h-[15vh] bg-white p-3 ">
          <div className="w-full mx-auto overflow-hidden flex justify-center">
            <img src={Tailwinds} className="w-full" />
          </div>
          <p className="mx-auto lg:text-[1rem] text-[0.9rem] text-center">
            Tailwind
          </p>
        </div>

        <div className="xl:w-[13%] lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-[90%] lg hover:shadow-[#DE4C35] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col justify-center xl:h-[15vh] bg-white p-3 ">
          <div className="w-full mx-auto overflow-hidden flex justify-center">
            <img src={Git} className="w-full" />
          </div>

          <p>Git</p>
        </div>
        {/* JAVASCRIPT */}
        <div className="xl:w-[13%] lg:w-[13%] md:w-[50%] rounded sm:w-[40%] w-full hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]  hover:shadow-[#F7DF1E]  flex flex-col justify-center xl:h-[15vh] bg-white p-3 ">
          <div className="w-[90%] mx-auto overflow-hidden flex justify-center">
            <img src={Javascript} />
          </div>

          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
