import HomePage from "./Pages/HomePage.jsx";
// import ResumePage from "./Pages/ResumePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/resume" element={<ResumePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
