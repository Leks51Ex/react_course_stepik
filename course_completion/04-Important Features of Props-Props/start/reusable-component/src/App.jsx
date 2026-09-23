import { useState } from "react";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";
import Main from "../components/Main";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />
      <Instructions showInstructions={showInstructions} />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
