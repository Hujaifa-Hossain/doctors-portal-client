import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./pages/Home";
import Appoinment from "./pages/Appoinment";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appoinment" element={<Appoinment />} />
      </Routes>
    </div>
  );
}

export default App;
