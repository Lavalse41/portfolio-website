import "../App.css";

function HomeSec1() {
  const curlyL = "{";
  const curlyR = "}";
  const quoteSym = "'";
  return (
    <section id="sec-1">
      <nav>
        <div id="wrapper-nav" className="text">
          <div>About</div>
          <div>Resume</div>
          <div>Portfolio</div>
          <div>Contact</div>
        </div>
      </nav>
      <div className="about-desc">
        <p className="head head-1 po-1">Hi &#9995;, My name is</p>
        <p className="head head-1">Ratip&#127845;rn Promsuk</p>
        <p className="head head-1 po-2">
          I{quoteSym}m graphic designer and soon
        </p>
        <span className="head head-1 gt gt-size">I will be a </span>
        <span className="head-1 curly gt-size">{curlyL}</span>
        <span className="head head-1 gt gt-size"> web-developer </span>
        <span className="head-1 curly gt-size">{curlyR}</span>
      </div>
    </section>
  );
}

export default HomeSec1;
