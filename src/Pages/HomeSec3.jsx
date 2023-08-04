import "../App.css";
import { portfolio } from "../component/portfolio";

function HomeSec3() {
  return (
    <section className="sec-3">
      <p className="head head-2">My Lastest Project</p>
      <div id="wrapper-outer-port">
        {portfolio.map((item, index) => {
          return (
            <div key={index} id="wrapper-port">
              <img
                src="https://i.ibb.co/Fsfj8mn/test-pic.jpg"
                alt=""
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
