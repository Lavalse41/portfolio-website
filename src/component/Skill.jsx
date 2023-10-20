import "../App.css";
import "../Anim.css";

function Skill() {
  return (
    <section id="skill">
      <p className="head head-2 scrollAnim">I can help you with..</p>
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
            <span id="sql-wrapper">
              <img
                className="tool-icon"
                id="sql"
                width="70px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472428/portfolio/tool%20icon/postgresql_cwltak.png"
              ></img>
            </span>
            <span id="node-wrapper">
              <img
                className="tool-icon"
                id="node"
                width="45px"
                alt="node"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472428/portfolio/tool%20icon/nodejs-mark-color_ghvv30.png"
              ></img>
            </span>
            <span id="js-wrapper">
              <img
                className="tool-icon"
                id="js"
                width="50px"
                alt="js"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472427/portfolio/tool%20icon/js_qzl5ha.png"
              ></img>
            </span>
            <span id="html-wrapper">
              <img
                className="tool-icon"
                id="html"
                width="50px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472427/portfolio/tool%20icon/html_ixs1tk.png"
              ></img>
            </span>
            <span id="css-wrapper">
              <img
                id="css"
                className="tool-icon"
                width="60px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697472426/portfolio/tool%20icon/css_h2llhp.png"
              ></img>
            </span>
            <span id="react-wrapper">
              <img
                id="react"
                className="tool-icon"
                width="60px"
                alt="sql"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697473021/portfolio/tool%20icon/React_zryglk.png"
              ></img>
            </span>
            <span id="tailw-wrapper">
              <img
                id="tailw"
                className="tool-icon"
                width="60px"
                alt="tailw"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697546902/portfolio/tool%20icon/tailwind_mrmbmq.png"
              ></img>
            </span>
            <span id="mongo-wrapper">
              <img
                id="mongo"
                className="tool-icon"
                width="90px"
                alt="mongo"
                src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697547836/portfolio/tool%20icon/Mongodb_lavcav.png"
              ></img>
            </span>
          </div>

          <div className="web-dev-des">
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
