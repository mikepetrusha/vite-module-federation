import "./App.css";
import { Header } from "home/Header";
import { Footer } from "home/Footer";
import CartContent from "./CartContent";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="my-10">
        <CartContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
