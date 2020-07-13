import React, { Fragment, useEffect} from "react";
import Particles from "../components/Particles";
import { AiFillGithub } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import Decoration from "../components/Decoration";
function Home() {

  useEffect(() => {
    document.title = "Home";
    
  }, []);
  return (
    <Fragment>
      <Particles />
      <div className="section-home h-flex-center">
        <div className="text-box h-text-center">
          <h1 className="heading__primary">
            Hi, I am{" "}
            <span className="heading__primary__span"> Vaibhav Verma </span>
          </h1>
          <p className="home__text h-text-center"> I am a Software Engineer and I am working towards making the world more interactive place</p>
          <a href="" className="btn-cercle" target="_blank">
            <FiFacebook />
          </a>

          <a href="" target="_blank" className="btn-cercle">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <Decoration />
    </Fragment>
  );
}

export default Home;
