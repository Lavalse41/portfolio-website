import "../App.css";
import "../Anim.css";
import { useEffect } from "react";

function Skill() {
  useEffect(() => {
    // Select the trigger element
    const triggerElement = document.querySelector(".trigger-element");

    // Select all elements to be animated
    const sqlWrapper = document.querySelectorAll(".sql-wrapper");
    const sql = document.querySelectorAll(".sql");
    const mongoWrapper = document.querySelectorAll(".mongo-wrapper");
    const mongo = document.querySelectorAll(".mongo");
    const reactWrapper = document.querySelectorAll(".react-wrapper");
    const react = document.querySelectorAll(".react");
    const jsWrapper = document.querySelectorAll(".js-wrapper");
    const js = document.querySelectorAll(".js");
    const cssWrapper = document.querySelectorAll(".css-wrapper");
    const css = document.querySelectorAll(".css");
    const htmlWrapper = document.querySelectorAll(".html-wrapper");
    const html = document.querySelectorAll(".html");
    const tailwWrapper = document.querySelectorAll(".tailw-wrapper");
    const tailw = document.querySelectorAll(".tailw");
    const nodeWrapper = document.querySelectorAll(".node-wrapper");
    const node = document.querySelectorAll(".node");

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 1, // When at least 50% of the trigger element is in view
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to the animation elements to start the animation
          sqlWrapper.forEach((element) => {
            element.classList.add("sql-wrapper-final");
          });
          sql.forEach((element) => {
            element.classList.add("sql-final");
          });

          mongoWrapper.forEach((element) => {
            element.classList.add("mongo-wrapper-final");
          });
          mongo.forEach((element) => {
            element.classList.add("mongo-final");
          });

          reactWrapper.forEach((element) => {
            element.classList.add("react-wrapper-final");
          });
          react.forEach((element) => {
            element.classList.add("react-final");
          });

          jsWrapper.forEach((element) => {
            element.classList.add("js-wrapper-final");
          });
          js.forEach((element) => {
            element.classList.add("js-final");
          });

          cssWrapper.forEach((element) => {
            element.classList.add("css-wrapper-final");
          });
          css.forEach((element) => {
            element.classList.add("css-final");
          });

          htmlWrapper.forEach((element) => {
            element.classList.add("html-wrapper-final");
          });
          html.forEach((element) => {
            element.classList.add("html-final");
          });

          tailwWrapper.forEach((element) => {
            element.classList.add("tailw-wrapper-final");
          });
          tailw.forEach((element) => {
            element.classList.add("tailw-final");
          });

          nodeWrapper.forEach((element) => {
            element.classList.add("node-wrapper-final");
          });
          node.forEach((element) => {
            element.classList.add("node-final");
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(triggerElement);
  }, []);

  return (
    <section id="skill">
      <p className="head head-2">I can help you with..</p>
      <div id="wrapper-cando">
        <div className="web-dev">
          <div className="icon-wrapper">
            <span className="web-dev-img">
              <img
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472286/portfolio/coding_zsiaju.png"
                height="350"
                width="350"
                alt="icon-coding"
              ></img>
            </span>
            {/*tool icon*/}
            <span className="sql-wrapper">
              <img
                className="tool-icon sql"
                width="70px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472428/portfolio/tool%20icon/postgresql_cwltak.png"
              ></img>
            </span>
            <span className="node-wrapper">
              <img
                className="tool-icon node"
                width="45px"
                alt="node"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472428/portfolio/tool%20icon/nodejs-mark-color_ghvv30.png"
              ></img>
            </span>
            <span className="js-wrapper">
              <img
                className="tool-icon js"
                width="50px"
                alt="js"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472427/portfolio/tool%20icon/js_qzl5ha.png"
              ></img>
            </span>
            <span className="html-wrapper">
              <img
                className="tool-icon html"
                width="50px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472427/portfolio/tool%20icon/html_ixs1tk.png"
              ></img>
            </span>
            <span className="css-wrapper">
              <img
                className="tool-icon css"
                width="60px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472426/portfolio/tool%20icon/css_h2llhp.png"
              ></img>
            </span>
            <span className="react-wrapper">
              <img
                className="tool-icon react"
                width="60px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697473021/portfolio/tool%20icon/React_zryglk.png"
              ></img>
            </span>
            <span className="tailw-wrapper">
              <img
                className="tool-icon tailw"
                width="60px"
                alt="tailw"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697546902/portfolio/tool%20icon/tailwind_mrmbmq.png"
              ></img>
            </span>
            <span className="mongo-wrapper">
              <img
                className="tool-icon mongo"
                width="90px"
                alt="mongo"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697547836/portfolio/tool%20icon/Mongodb_lavcav.png"
              ></img>
            </span>
          </div>

          <div className="web-dev-des">
            <div id="trigger-element" className="trigger-element"></div>
            <p className="head head-3">Web development</p>
            <p className="text">
              deliver both effective and<br></br>appealing website using these
              tools
            </p>
            <p className="tools-box-wrapper">
              <div style={{ marginRight: "10px", fontWeight: "bold" }}>
                Front-end:
              </div>
              <div className="tools-box">Javascript</div>
              <div className="tools-box">HTML</div>
              <div className="tools-box">CSS</div>
              <div className="tools-box">React</div>
              <div className="tools-box">Typescript</div>
            </p>

            <p className="tools-box-wrapper">
              <div style={{ marginRight: "10px", fontWeight: "bold" }}>
                Back-end:
              </div>
              <div className="tools-box">MongoDB</div>
              <div className="tools-box">SQL</div>
              <div className="tools-box ">Node.js</div>
              <div className="tools-box">Express.js</div>
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1695387119/portfolio/graphic_kozwsx.jpg"
            height="350"
            width="350"
            alt="icon-graphic"
          ></img>
          <p className="head head-3">Graphic Design</p>
          <p className="text">
            illustrate beautiful artworks<br></br>and layout typography for you
          </p>
        </div>
      </div>
    </section>
  );
}
export default Skill;
