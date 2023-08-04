import "../App.css";

function HomeSec2() {
  return (
    <section id="sec-2">
      <p className="head head-2">I can help you with..</p>
      <div id="wrapper-cando">
        <div>
          <img
            src="https://i.ibb.co/S7CRcQh/icon-graphic.png"
            height="350"
            width="350"
            alt="icon-graphic"
          ></img>
          <p className="head head-3">Graphic Design</p>
          <p className="text">
            illustrate beautiful artworks<br></br>and layout typography for you
          </p>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <img
            src="https://i.ibb.co/MpLVJ4k/icon-coding.png"
            height="350"
            width="350"
            alt="icon-coding"
          ></img>
          <p className="head head-3">Web development</p>
          <p className="text">
            deliver both effective and<br></br>appealing website using <br></br>
            <i
              className="fa-brands fa-html5 line letter-space"
              style={{ color: "#ea4a2e", fontSize: "30px" }}
            ></i>
            ,
            <i
              className="fa-brands fa-css3-alt line letter-space"
              style={{ color: "#6295cb", fontSize: "30px" }}
            ></i>
            ,
            <i
              className="fa-brands fa-js line letter-space"
              style={{ color: "#eac04d", fontSize: "30px" }}
            ></i>
            ,
            <i
              className="fa-brands fa-react line"
              style={{ color: "#29bce0", fontSize: "30px" }}
            ></i>
          </p>
          <br></br>
        </div>
      </div>
    </section>
  );
}
export default HomeSec2;
