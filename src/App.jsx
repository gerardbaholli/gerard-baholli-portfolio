import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Utils from "./components/Utils/Utils.jsx";
import MTGKeywordFinder from "./components/MTGKeywordFinder/MTGKeywordFinder.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/utils" element={<Utils />} />
      <Route path="/utils/MTGKeywordFinder" element={<MTGKeywordFinder />} />
      {/* Aggiungi altre rotte per altri progetti */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
