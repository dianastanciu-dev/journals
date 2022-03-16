import "./App.css";
import "./components/Button.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Archives from "./components/Archives";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar /> {/*Navbar pe toate paginile*/}
        <Routes>
          <Route path="/" exact element={Home} />

          <Route path="archives" element={Archives} />
          {/*componenta Archives doar pe pagina Archives*/}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
