import logo from "./logo.svg";
import "./App.css";
import Layout from "./";
import { ThemeProvider } from "./config/ThemeContent";
import Bio from "./components/Bio";
import Navbar from "./components/Navbar";
import Particle from "./config/Particle";
import Skill from "./components/Skill";
import Portofolio from "./components/Portofolio";
import About from "./components/About";
function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-[150vh] w-full bg-yellowLight dark:bg-bgDark">
        <Navbar />
        <div className="bg-yellowLight  w-full min-h-screen  dark:bg-bgDark px-[2rem] sm:px-[3rem] md:px-[5rem] xl:px-[12rem] lg:px-[10rem]">
          {/* <Particle /> */}
          <Bio />

          <div className="mt-1">
            <About />
          </div>
          <div className="mt-12">
            <Skill />
          </div>
          <div className="mt-12">
            <Portofolio />
          </div>
        </div>
        <footer className="p-6">
          <p className="text-slate-400 text-[0.9rem]">
            © 2022 Muhammad Bayou Satrio. All Rights Reserved.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
