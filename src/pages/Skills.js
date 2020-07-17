import React, { useContext, useEffect } from "react";
import Decoration from "../components/Decoration";
import Particles from "../components/Particles";
function Skills() {
  const data = ['Java Script', 'React JS', 'NODE JS', 'Express', 'Mongoose', 'Redux', 'Sql Server'];
  const experienceData = [
    { id: 1, year: "2019 - Present", title: "Senior Software Engineer", desc: "Think Future Technology" },
    { id: 2, year: "2016 - 2019", title: "Software Engineer", desc: "Think Future Technology" },
    { id: 3, year: "2012 - 2016", title: "Bachelor of Technology", desc: "Information Technology" }
  ];
  useEffect(() => {
    document.title = "Skills";
  }, []);

  return (
    <div className="section-skills">
      <div className="skills">
        <h2 className="heading-secondary">Skills</h2>
        <h2 className="skills__heading">
          Here are a few technologies I've been working with recently:
        </h2>
        <ul className="skills__list">
          {data.map((element, index) => {
            return (
              <li className="skills__item" key={index}>
                {" "}
                <span>
                  {" "}
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </span>
                {element}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="education">
        <h2 className="heading-secondary">Experience</h2>
        {experienceData.map((element) => {
          return (
            <div className="education__card" key={element._id}>
              <div className="education__time">{element.year}</div>
              <div className="education__info">
                <div className="education__title1"> {element.title} </div>
                <div className="education__title2">{element.desc} </div>
              </div>
            </div>
          );
        })}
      </div>
      <Decoration />
    </div>
  );
}

export default Skills;
