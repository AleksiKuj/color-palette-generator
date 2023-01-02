import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";
import ColorBox from "./components/ColorBox";
import Footer from "./components/Footer";

const namer = require("color-namer");
const tinycolor = require("tinycolor2");

function App() {
  const toggleLock = (e) => {
    e.target.classList.toggle("locked");
  };
  console.log(namer("#5e4974"));
  const copy = (e) => {
    const textToCopy = e.target.firstChild.textContent.toUpperCase();
    navigator.clipboard.writeText(textToCopy);
    console.log(textToCopy);
  };

  const handleClick = (e) => {
    toggleLock(e);
    copy(e);
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
        element.firstChild.firstChild.textContent = color;
        element.firstChild.childNodes[1].textContent = namer(color).ntc[0].name;

        brightnessCheck(element);
      }
      return 1;
    });
  };
  const colorName = (color) => namer(color).ntc[0].name;

  const [boxes, setBoxes] = useState([
    <ColorBox
      key={0}
      handleClick={handleClick}
      randomColor={randomColor()}
      colorName={colorName}
    />,
    <ColorBox
      key={1}
      handleClick={handleClick}
      randomColor={randomColor()}
      colorName={colorName}
    />,
  ]);
  const [boxKey, setBoxKey] = useState(boxes.length);

  const addBox = () => {
    if (boxes.length < 10) {
      setBoxKey(boxKey + 1);
      setBoxes(
        boxes.concat(
          <ColorBox
            key={boxKey}
            randomColor={randomColor()}
            handleClick={handleClick}
            colorName={colorName}
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
        <h1>Color palette generator</h1>
        <p>Click on colors to lock them and copy to clipboard</p>
        <Buttons
          addBox={addBox}
          removeBox={removeBox}
          generateColors={generateColors}
        />
        <p style={{ color: `#${randomColor()}` }}>Colors: {boxes.length}</p>
      </div>
      <div className="main-container">{boxes}</div>
      <Footer />
    </div>
  );
}

export default App;
