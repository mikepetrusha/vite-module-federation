import "./App.css";
import { Header } from "home/Header";
import { Footer } from "home/Footer";
import PDPContent from "./components/PDPContent";

function App() {
  return (
    <>
      <Header />
      <div>Pdp page</div>
      <PDPContent />
      <Footer />
    </>
  );
}

export default App;
