import "../App.css";
import { portfolio } from "../component/portfolio.js";

function HomeSec3() {
  return (
    <section className="sec-3">
      <p className="head head-2">My Lastest Project</p>
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
    </section>
  );
}

export default HomeSec3;
