import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/pages/Home"
import Adding from "../src/pages/Adding"
import Factors from './pages/Factors';
import DetailFactor from './pages/DetailFactor';
import Equipments from './pages/Equipments';
import AddingFactors from './pages/AddingFactors';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/add" element={<Adding></Adding>} />
            <Route path="/equipments" element={<Equipments></Equipments>} />
            <Route path="/factors" element={<Factors></Factors>} />
            <Route path="/detailFactor" element={<DetailFactor></DetailFactor>} />
            <Route path="/addFactory" element={<AddingFactors></AddingFactors>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
