import "../App.css";
import About from "../component/About.jsx";
import Skill from "../component/Skill.jsx";
import Project from "../component/Project.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}
export default HomePage;
