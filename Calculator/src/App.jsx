import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import AppName from "./components/AppName";

function App() {
  const [calVal, setcalVal] = useState("");

  let onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newValue = calVal + buttonText;
      setcalVal(newValue);
    }
  };

  return (
    <>
      <AppName />
      <div className={styles.calculator}>
        <Display calVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
