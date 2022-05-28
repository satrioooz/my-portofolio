import React from "react";
import { Toggle } from "../config/Toggle";
import "../components/bio.css";
const Navbar = () => {
  const [opacity, setOpacity] = React.useState(0);
  const changeNavbarColor = () => {
    if (window.scrollY >= 35) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div
        className={
          opacity
            ? `   bg-yellowNav  shadow fixed top-0   px-[2rem] sm:px-[3rem] md:px-[5rem] xl:px-[12rem] lg:px-[10rem] z-10 items-center justify-between flex w-full h-[60px] dark:bg-bgDark`
            : "  bg-yellowNav  sticky px-[2rem] sm:px-[3rem] md:px-[5rem] xl:px-[12rem] lg:px-[10rem] items-center justify-between flex w-full h-[60px] dark:bg-bgDark"
        }
      >
        <div className="flex ">
          <h1 className="text-dark dark:text-white  text-[1.1rem] lg:font-normal font-semibold lg:text-[1.5rem]">
            @Muhammad Satrio
          </h1>
        </div>
        <Toggle />
      </div>
    </>
  );
};

export default Navbar;
