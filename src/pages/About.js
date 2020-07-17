import React, { useEffect} from "react";
import Particles from "../components/Particles";
import { GrNode } from "react-icons/gr";
import { DiReact } from "react-icons/di";
import Decoration from "../components/Decoration";
import web from "../assets/svgs/mac.png";

function About() {
  return (
    <section className="section-about">
        {/* <Particles /> */}
      <div className="about">
        <div className="heading-box">
          <h2 className="heading-secondary">about me</h2>
        </div>
        <div className="about__box">
          <div className="about__image-container">
            <img
              src = {web}
              alt="my photo"
              className="about__photo"
            />
          </div>
          <div className="about__text">
            <h3 className="heading-3rd">
              I am <span>Vaibhav Verma</span>
            </h3>
            <p className="about__paragraph">I'm a software developer I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
            <ul className="about__list">
              <li className="about__item">
                <b>Full name</b> Vaibhav Verma
              </li>
              <li className="about__item">
                <b>Age</b> 26
              </li>
              <li className="about__item">
                <b>Location</b> Gurgaon{" "}
              </li>
              <li className="about__item">
                <b>Phone</b>
                +91-9198856666
              </li>
            </ul>
            <a href={''} className="btn--primary" target="_blank">
              Downlaod Cv
            </a>
          </div>
        </div>
      </div>
      <Decoration />
    </section>
  );
}

export default About;
