import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeContent } from "./components/HomeContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";

function App() {
  return (
    <Router>
      <div className="max-w-6xl mx-auto text-3xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
