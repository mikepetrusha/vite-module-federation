import "./App.css";
import { Header } from "home/Header";
import { Footer } from "home/Footer";
import PDPContent from "./components/PDPContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-w-6xl mx-auto text-3xl">
        <Header />
        <div className="p-5">
          <h1 className="text-5xl font-bold">Welcome to Cats World PDP Page</h1>
        </div>
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
