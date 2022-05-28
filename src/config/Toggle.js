import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContent";
import "./toggle.css";

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [dark, setDark] = useState(false);

  function isDark() {
    return theme === "dark";
  }

  function toggleTheme(e) {
    setDark(!dark);
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <label className="relative theme-toggler settings-option ">
      <input
        type="checkbox"
        name=""
        id="checkbox"
        className="theme-toggler__checkbox "
        checked={isDark()}
        onChange={(e) => toggleTheme(e)}
      />
      <div className="toggle">
        <svg
          id="graphic"
          viewBox="0 0 132.29 132.29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="sung">
            <path
              id="sun"
              d="m99.722 66.146a33.576 33.576 0 0 1-33.576 33.576 33.576 33.576 0 0 1-33.576-33.576 33.576 33.576 0 0 1 33.576-33.576 33.576 33.576 0 0 1 33.576 33.576"
            />
            <g
              id="sunshine"
              transform="matrix(.92602 0 0 .92602 -10.774 -58.541)"
            >
              <path
                transform="matrix(0 .58145 -.59067 0 145.26 159.26)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(-.41115 .41115 -.41766 -.41766 109.64 196.03)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(-.58145 0 0 -.59067 58.451 196.84)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(-.41115 -.41115 .41766 -.41766 21.685 161.22)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(0 -.58145 .59067 0 20.875 110.03)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(.41115 -.41115 .41766 .41766 56.495 73.269)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(.58145 0 0 .59067 107.68 72.459)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
              <path
                transform="matrix(.41115 .41115 -.41766 .41766 144.45 108.08)"
                d="m-19.4 32.282h-45.867l22.934-39.722z"
              />
            </g>
          </g>
          <path
            id="croissant"
            d="m55.461 34.281a33.587 33.587 0 0 0-22.874 31.832 33.587 33.587 0 0 0 33.587 33.587 33.587 33.587 0 0 0 30.441-19.395 31.187 31.187 0 0 1-17.268 5.2174 31.187 31.187 0 0 1-31.187-31.187 31.187 31.187 0 0 1 7.3022-20.053z"
          />
        </svg>
      </div>
      <span aria-hidden="true" className="theme-toggler__switch"></span>
    </label>
  );
};
