import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./App.css";
const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "Red", style: { backgroundColor: "#FF0000" } },
    { option: "Orange", style: { backgroundColor: "#FFA500" } },
    { option: "Yellow", style: { backgroundColor: "#FFFF00" } },
    { option: "Green", style: { backgroundColor: "#008000" } },
    { option: "Blue", style: { backgroundColor: "#0000FF" } },
    { option: "Purple", style: { backgroundColor: "#800080" } },
  ];

  const colorPsychologyMeanings = [
    { option: "Red is associated with energy, passion, and action." },
    { option: "Orange represents creativity, enthusiasm, and warmth." },
    { option: "Yellow symbolizes happiness, optimism, and youthfulness." },
    { option: "Green signifies growth, harmony, and freshness." },
    { option: "Blue is associated with trust, stability, and calmness." },
    { option: "Purple represents luxury, ambition, and creativity." },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="app">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
      />
      <button className="btn" onClick={handleSpinClick} disabled={mustSpin}>
        SPIN
      </button>
      <div className="output">
        {!mustSpin ? colorPsychologyMeanings[prizeNumber].option : "0"}
      </div>
    </div>
  );
};

export default App;
