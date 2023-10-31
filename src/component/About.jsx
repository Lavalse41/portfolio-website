import "../App.css";
import "../Anim.css";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  const curlyL = "{";
  const curlyR = "}";
  const quoteSym = "'";

  return (
    <section id="about">
      <div className="about-desc">
        <p className="head head-1 po-1">
          Hi<span id="space1">{""}</span>
          <span id="hihand">
            <img
              className="cssanimation pepe"
              id="hand-png"
              alt="hi-icon"
              src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697458390/portfolio/hi_ffllcv.png"
            ></img>
          </span>
          , My name is
        </p>
        <p className="head head-1 po-2">
          Ratip<span id="space2">{""}</span>
          <span id="flower">
            <img
              id="flower-png"
              alt="flower-icon"
              src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697458390/portfolio/flower_ewvnw1.png"
            ></img>
          </span>
          rn Promsuk
        </p>
        <p className="head head-1 po-3 about-flex">
          <div>I{quoteSym}m a graphic designer</div>
          <div>and soon</div>
        </p>
        <p className="po-4">
          <span className="head head-1 gt-size">I will be a </span>
          <span className="head-1 curly gt-size">{curlyL}</span>
          <span className="head-1 gt-size">web-developer</span>
          <span className="head-1 curly gt-size">{curlyR}</span>
        </p>
        <div id="leadline">
          <img
            id="leadline-png"
            alt="leadline"
            src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697782628/portfolio/line-lead2_gi6xnj.png"
          ></img>
        </div>
        <div id="glow-wrapper">
          <div id="glow" className="cssanimation hu__hu__">
            <img src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697773511/portfolio/glow_hesymg.png"></img>
            <Link to="/resume">
              <div className="about-me">
                <p>Learn more</p>
                <p>About Me</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
