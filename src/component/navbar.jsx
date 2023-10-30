import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div>
      <div id="wrapper-nav" className="text">
        <div>
          <Link smooth to={location.name === "/" ? "/#top" : "/"}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/resume">About Me</Link>
        </div>
        <div>
          <Link
            smooth
            to={location.name === "/" ? "#portfolio" : "/#portfolio"}
          >
            Portfolio
          </Link>
        </div>
        <div>
          <Link smooth to={location.name === "/" ? "#footer" : "/#footer"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
