import React, { useEffect } from "react";
import TypeAnimation from "react-type-animation";
import Hero from "../images/hero.png";
import Typical from "react-typical";
import "./bio.css";
import Man from "../images/manworking.gif";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Lottie from "react-lottie";
import ManWorking from "../images/manWork";
const Bio = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ManWorking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div id="stars" className="absolute left-0 right-0" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="w-ful  xl:justify-between md:justify-between sm:justify-between justify-center items-center lg:justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-row flex-col  pt-8 flex">
        <div className="lg:w-[50%] sm:w-[60%]">
          <div className="flex ">
            <h1 className="dark:text-white font-normal  text-left sm:text-[1.3rem] text-[1.7rem]">
              Hi There
            </h1>
            <p className="HI w-5  text-[1.5rem]">👋</p>
          </div>

          <div className="text-left   dark:text-white font-light ">
            <h1 className="dark:text-white  text-left text-[1.7rem]">
              I'm <span className="font-bold"> Muhammad Bayou Satrio</span>
            </h1>

            <strong className="m-0 bg-yellow-400 px-1">
              <Typical
                steps={["FRONT-END DEVELOPER", 2000]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
            <div className="flex py-3 flex-col justify-center items-center">
              <div className="gap-3  flex justify-center items-center h-[70px]">
                <a
                  href="https://github.com/bayustrio"
                  target="_blank"
                  className="cursor-pointer text-[2rem] bg-[#333333] p-2 rounded-full text-white"
                >
                  <AiFillGithub className="" />
                </a>
                <a
                  href="https://www.facebook.com/bayu.satrio.718689"
                  target="_blank"
                  className="cursor-pointer bg-[#4267B2] text-[2rem] p-2 rounded-full text-white"
                >
                  <BsFacebook />
                </a>
                <a
                  target="_blank"
                  href="mailto:bayustrio7@gmail.com?subject=SendMail&body=Hello Muhammad Satrio"
                  className="cursor-pointer bg-[#EA4234] text-white text-[2rem] p-2 rounded-full"
                >
                  <AiFillGoogleCircle />
                </a>
                <a
                  className="cursor-pointer bg-[#E4405F] text-[2rem] text-white p-2 rounded-full "
                  target="_blank"
                  href="https://www.instagram.com/bayuu.satrio/"
                >
                  <AiFillInstagram height={15} />
                </a>
              </div>
              <button className="rounded hover:bg-blue-600 bg-blue-500 py-2 px-10 text-[1.3rem] text-white font-semibold ">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center xl:justify-end md:w-[60%] lg:w-[60%] xl:w-[70%] sm:w-[60%]">
          <div className="w-[350px] h-[350px] xl:w-[400px] xl:h-[400px] lg:w-[400px] lg:h-[400px] md:w-[400px] sm:w-[400px] sm:h-[400px] md:h-[400px] object-cover">
            <Lottie
              options={defaultOptions}
              // height={400}
              // width={400}
            />
          </div>
          {/* <img
              className="object-cover bg-none  w-[60%] md:w-full sm:w-full lg:w-[70%] xl:full  mx-auto xl:object-right"
              src={Man}
            /> */}
        </div>
      </div>
    </div>
  );
};

export default Bio;
