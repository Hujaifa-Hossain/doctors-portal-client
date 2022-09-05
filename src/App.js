import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./pages/Home";
import Appoinment from "./pages/Appoinment";
import Footer from "./shared/Footer";
import NotFound from "./shared/NotFound";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appoinment" element={<Appoinment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
