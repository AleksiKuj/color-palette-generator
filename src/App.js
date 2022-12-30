import "./App.css";
import { useState } from "react";

const tinycolor = require("tinycolor2");

const ColorBox = (props) => {
  return (
    <div
      className="color-container"
      style={{ backgroundColor: `${props.randomColor}` }}
      onClick={props.toggleLock}
    >
      <span>{props.randomColor}</span>
    </div>
  );
};

function App() {
  const toggleLock = (e) => {
    e.target.classList.toggle("locked");
  };

  const randomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * (0xffffff + 1))
        .toString(16)
        .padStart(6, "0")
    );
  };

  const brightnessCheck = (element) => {
    if (tinycolor(element.style.backgroundColor).getBrightness() < 145) {
      element.style.color = "#f5f2f2";
    } else {
      element.style.color = "black";
    }
  };
  const generateColors = () => {
    const elements = Array.from(
      document.getElementsByClassName("color-container")
    );

    elements.map((element) => {
      const color =
        "#" +
        Math.floor(Math.random() * (0xffffff + 1))
          .toString(16)
          .padStart(6, "0");

      if (!element.classList.contains("locked")) {
        element.style.backgroundColor = `${color}`;
        element.firstChild.textContent = color;

        brightnessCheck(element);
      }
    });
  };

  const [boxes, setBoxes] = useState([
    <ColorBox key={0} toggleLock={toggleLock} randomColor={randomColor()} />,
  ]);
  const [boxKey, setBoxKey] = useState(1);

  const addBox = () => {
    if (boxes.length < 10) {
      setBoxKey(boxKey + 1);
      setBoxes(
        boxes.concat(
          <ColorBox
            key={boxKey}
            randomColor={randomColor()}
            toggleLock={toggleLock}
          />
        )
      );
    }
  };

  const removeBox = () => {
    if (boxes.length > 1) {
      const boxesCopy = [...boxes];
      boxesCopy.splice(-1);
      setBoxes(boxesCopy);
    }
  };

  return (
    <div>
      <div className="top-container">
        <h1>Color templates generator</h1>
        <p>Click on colors to lock them</p>
        <div>
          <button onClick={addBox}>Add </button>
          <button onClick={removeBox}>Remove</button>
          <button onClick={generateColors}>Generate colors</button>
        </div>

        <p style={{ color: `#${randomColor()}` }}>Colors: {boxes.length}</p>
      </div>
      <div className="main-container">{boxes}</div>
    </div>
  );
}

export default App;
