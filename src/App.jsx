import ProgrammingLog from "./pages/ProgrammerLog";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="scroll-mt-14">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmerlog" element={<ProgrammerLog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
