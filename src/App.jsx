import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import MTGKeywordFinder from "./components/MTGKeywordFinder/MTGKeywordFinder.jsx";
import Projects from "./components/Projects/Projects.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/MTGKeywordFinder" element={<MTGKeywordFinder />} />
          {/* Aggiungi altre rotte per altri progetti */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
