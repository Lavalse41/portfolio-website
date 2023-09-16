import "../App.css";
import { portfolio } from "./portfolio.js";

function Project() {
  return (
    <section className="sec-3">
      <p className="head head-2">My Lastest Project</p>
      <div class>
        <div id="wrapper-outer-port">
          {portfolio.map((item, index) => {
            return (
              <div key={index} id="wrapper-port">
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
        <div id="wrapper-outer-port">
          {portfolio.map((item, index) => {
            return (
              <div key={index} id="wrapper-port">
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
    </section>
  );
}

export default Project;
