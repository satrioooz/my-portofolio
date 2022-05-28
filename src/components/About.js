import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-full h-1 bg-yellow-400"></div>
        <div>
          <h1 className="uppercase dark:text-white font-bold text-[2rem] lg:text-[3rem]">
            About
          </h1>
        </div>
        <div className="w-full h-1 bg-yellow-400"></div>
      </div>

      <div className="lg:w-[40%] w-[80%] sm:w-[50%] md:w-[50%] xl:w-[40%] mx-auto">
        <p className="text-left font-medium font-openSans dark:text-white">
          I'am Muhammad Bayou Satrio, I live in Indonesia, the city of Bekasi.
          My area of interest is to be a front end developer. I'm always
          learning to keep improving and being the best.
        </p>
      </div>
    </div>
  );
};

export default About;
