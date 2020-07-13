import React from "react";
import Particles from "react-particles-js";

function Particule() {
  return (
    <div className="particule">
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 5,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Particule;
