import { useState } from "react";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";
import Main from "../components/Main";
import Section from "../components/Section";
import Button from "../components/Button";
import ExplicitComp from "../components/ExplicitComp";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  function handleClick() {
    alert("click");
  }

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />
      <Instructions showInstructions={showInstructions} />
      <Main>
        <Section title={"Size"}>
          <Button text="small" size={"small"}></Button>
          <Button size={"large"} text={"large"}></Button>
          <Button text={"medium"} size={"medium"}></Button>
        </Section>
        <Section title={"Variant"}>
          <Button varian="primary" text={"primary"}></Button>
          <Button varian="secondary" text={"secondary"}></Button>
        </Section>
        <Section title={"Active"}>
          <Button text={"Active"}></Button>
          <Button text={"Disabled"} isDisabled></Button>
        </Section>
        <Section title={"Click"}>
          <Button text={"clicked"} onClick={handleClick}></Button>
        </Section>
        <ExplicitComp
          title={<h1>Explicit props</h1>}
          button={<Button text={"Explicit"}></Button>}
        ></ExplicitComp>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
