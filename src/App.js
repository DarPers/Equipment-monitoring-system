import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/pages/Home"
import Adding from "../src/pages/Adding"

import Equipments from './pages/Equipments';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/add" element={<Adding></Adding>} />
            <Route path="/equipments" element={<Equipments></Equipments>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
