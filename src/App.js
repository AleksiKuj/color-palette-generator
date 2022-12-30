import "./App.css";
import { useState } from "react";

const ColorBox = (props) => {
  return (
    <div
      className="color-container"
      style={{ background: `#${props.randomColor}` }}
    >
      test #<span>{props.randomColor}</span>
    </div>
  );
};

// const ColorBoxes = (props) => {
//   return <div className="main-container">{props.boxes}</div>;
// };

function App() {
  const [boxes, setBoxes] = useState([<ColorBox key={0} />]);
  const [boxKey, setBoxKey] = useState(1);

  const addBox = () => {
    if (boxes.length < 10) {
      setBoxKey(boxKey + 1);
      setBoxes(
        boxes.concat(<ColorBox key={boxKey} randomColor={randomColor()} />)
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
  const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const generateColors = () => {
    const elements = Array.from(
      document.getElementsByClassName("color-container")
    );
    elements.map((element) => {
      element.style.background = `#${randomColor()}`;
    });
  };

  return (
    <div>
      <h1 style={{ background: "red" }}>Color templates generator</h1>
      <button onClick={addBox}>Add </button>
      <button onClick={removeBox}>Remove</button>
      {/* <button onClick={changeColors}>Generate colors</button> */}
      <button onClick={generateColors}>Generate colors</button>
      <p style={{ color: `#${randomColor()}` }}>Colors: {boxes.length}</p>
      <div className="main-container">{boxes}</div>
    </div>
  );
}

export default App;
