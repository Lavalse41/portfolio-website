import "../App.css";
import "../Anim.css";

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
              width="120px"
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
              width="120px"
              alt="flower-icon"
              src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697458390/portfolio/flower_ewvnw1.png"
            ></img>
          </span>
          rn Promsuk
        </p>
        <p className="head head-1 po-3">
          I{quoteSym}m a graphic designer and soon
        </p>
        <p className="po-4">
          <span className="head head-1 gt-size">I will be a </span>
          <span className="head-1 curly gt-size">{curlyL}</span>
          <span className="head-1 gt-size">web-developer</span>
          <span className="head-1 curly gt-size">{curlyR}</span>
        </p>
        <div id="leadline">
          <img
            width="600px"
            alt="leadline"
            src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697782628/portfolio/line-lead2_gi6xnj.png"
          ></img>
        </div>
        <div id="glow-wrapper">
          <div id="glow" className="cssanimation hu__hu__">
            <img src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697773511/portfolio/glow_hesymg.png"></img>
            <div className="about-me">
              <p>Learn more</p>
              <p>About Me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
