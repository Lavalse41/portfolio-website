import "../App.css";
import { portfolio, webport } from "./portfolio.js";
import { useRef, useState } from "react";

function Project() {
  const playerRefs = webport.map(() => useRef());
  const [footerPosition, setFooterPosition] = useState("webdev");

  function handleFooterPosition(project) {
    setFooterPosition(project);
  }

  function handleMouseOver(index) {
    playerRefs[index].current.play();
  }

  function handleMouseOut(index) {
    playerRefs[index].current.pause();
  }

  return (
    <section
      className={
        footerPosition === "graphic" ? `project project-hidden` : `project`
      }
      id="portfolio"
    >
      <p className="head head-2">My Lastest Project</p>

      <div className="slider">
        <input
          type="radio"
          name="slider"
          id="slide1"
          onClick={() => handleFooterPosition("graphic")}
        ></input>
        <input
          type="radio"
          name="slider"
          id="slide2"
          defaultChecked
          onClick={() => handleFooterPosition("webdev")}
        ></input>
        <div id="option">
          <label htmlFor="slide1" className="bodytext-2 blue">
            Graphic Design
          </label>
          <label htmlFor="slide2" className="bodytext-2 green">
            Web Development
          </label>
        </div>

        <div className="slides">
          <div className="overflow">
            <div className="inner">
              <div className="slide slide_1">
                <div className="wrapper-port">
                  {portfolio.map((item, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={item.img.src}
                          alt={item.img.alt}
                          height="350"
                          width="350"
                        ></img>
                        <p className="text">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="slide slide_2">
                <div className="wrapper-port">
                  {webport.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="port-container"
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={() => handleMouseOut(index)}
                      >
                        <img
                          src={item.img.src}
                          alt={item.img.alt}
                          height="600"
                        ></img>

                        <video
                          ref={playerRefs[index]}
                          loop
                          muted
                          // controls
                          height="600"
                        >
                          <source src={item.video.src} type="video/webm" />
                        </video>
                        <p className="project-name">{item.title}</p>
                        <div className="project-link">
                          <a className="project-link-wrapper">
                            <svg
                              className="github"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 97.71 97.71"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                fill="#24292f"
                              />
                            </svg>
                            Github code
                          </a>
                          <div className="separate-line"></div>
                          <a
                            href={item.link}
                            target="_blank"
                            className="project-link-wrapper"
                          >
                            <img
                              width="25px"
                              src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697711548/portfolio/cinema-clapperboard_nwnu2l.png"
                            ></img>
                            Live demo
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
