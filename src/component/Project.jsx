import "../App.css";
import { portfolio } from "./portfolio.js";

function Project() {
  return (
    <section className="sec-3">
      <p className="head head-2">My Lastest Project</p>

      <div className="slider">
        <input type="radio" name="slider" id="slide1" checked></input>
        <input type="radio" name="slider" id="slide2"></input>
        <div id="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
