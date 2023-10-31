import { useState } from "react";
import "../App.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function ResumePage() {
  const [selectedContent, setSelectedContent] = useState("aboutme");

  function handleSelectedContent(content) {
    setSelectedContent(content);
  }

  return (
    <>
      <Navbar />
      <div className="resume-outer">
        <div className="resume-wrapper">
          <div className="resume-side">
            <div>
              <div className="head resume-name">
                <div className="ratiporn">Ratiporn</div>
                <div className="promsuk">Promsuk</div>
              </div>
              <div className="resume-title">Front-End Developer</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "2rem",
              }}
            >
              <button
                onClick={() => handleSelectedContent("aboutme")}
                className="detail-about-me"
              >
                <img src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1698681990/portfolio/flower_stamp_blue_edmtz2.png"></img>
                <div>About Me</div>
              </button>
              <button
                onClick={() => handleSelectedContent("workexp")}
                className="working-exp"
              >
                <img src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1698681990/portfolio/flower_stamp_green_hqcjxh.png"></img>
                <div>
                  Work <br></br> Experience
                </div>
              </button>
            </div>
          </div>

          <div className="resume-content">
            {selectedContent === "workexp" && (
              <div id="workexp">
                <div className="resume-topic">Work Experience</div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    marginTop: "2rem",
                  }}
                >
                  <div>
                    <div className="resume-subtopic">
                      Freelance Graphic Designer<br></br> 2021 – Present
                    </div>
                    <div style={{}}>
                      Designs posters, social media ads, packages and a brand
                      identity for small business owner
                    </div>
                  </div>

                  <div>
                    <div className="resume-subtopic">
                      Full-time Graphic Designer<br></br> Nasomdul, January –
                      May 2023
                    </div>
                    <div>
                      Designed infographic related to health and wellness as
                      well as company advertising materials (social media,
                      poster) with increased shares, likes amount, and
                      engagements
                    </div>
                  </div>

                  <div>
                    <div className="resume-subtopic">
                      Graphic Design Trainnee<br></br> Pink Blue Black & Orange
                      Co., Ltd. , March 2019 - July 2019
                    </div>
                    <div>
                      Designed a student textbook cover for IPST which has been
                      published and distributed to many Thai high schools as a
                      learning material.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedContent === "aboutme" && (
              <div id="aboutme" onClick={() => handleSelectedContent(id)}>
                <div
                  style={{
                    marginBottom: "3rem",
                  }}
                >
                  Hey there! So, after spending a couple of years in the world
                  of graphic design, I decided to switch things up and dive into
                  web development. I've been absolutely loving it, especially
                  the problem-solving aspect and that awesome feeling when I
                  conquer a challenge. That's why I'm all in on front-end
                  development now – I want to combine my design skills with
                  coding to take my career to the next level.
                </div>

                <div className="edu-skill-wrapper">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    }}
                  >
                    <div className="resume-topic">Education</div>
                    <div className="edu-wrapper">
                      <div>
                        <div className="resume-bold">Coding Bootcamp</div>
                        Full-Stack Software Development
                        <br></br>TechUp, June – October 2023
                      </div>
                      <div>
                        <div className="resume-bold">Bachelor’s Degree</div>Fine
                        Arts<br></br>
                        King Monkut University<br></br> of Technology Thonburi,
                        2017 – 2020
                      </div>
                    </div>
                  </div>
                  <div className="resume-skill-wrapper">
                    <div className="resume-topic">Technical Skills</div>
                    <div>
                      <div className="resume-bold">Front-End:</div>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <div className="resume-tools">HTML</div>
                        <div className="resume-tools">Javascript</div>
                        <div className="resume-tools">CSS</div>
                        <div className="resume-tools">Typescript</div>
                      </div>
                    </div>
                    <div>
                      <div className="resume-bold">Back-End:</div>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <div className="resume-tools">Node.js</div>
                        <div className="resume-tools">Express.js</div>
                        <div className="resume-tools">MongoDB</div>
                        <div className="resume-tools">SQL</div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <div className="resume-bold">Other:</div>
                      <div className="resume-tools">Git</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResumePage;
