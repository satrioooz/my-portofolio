import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      className="bg-none z-10 w-full min-h-screen"
      params={{
        background: {
          color: {
            value: "none",
          },
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 15,
            random: true,
          },
          move: {
            direction: "bottom",
            outMode: "out",
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "remove",
            },
          },
          modes: {
            remove: {
              quantity: 10,
            },
          },
        },
      }}
    />
  );
};
export default Particle;
