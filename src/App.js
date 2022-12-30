import "./App.css";
import { useState } from "react";

const ColorBox = () => {
  return <div className="color-container">test</div>;
};

const ColorBoxes = (props) => {
  return <div className="main-container">{props.boxes}</div>;
};

function App() {
  const [boxes, setBoxes] = useState([<ColorBox key={0} />]);
  const [boxKey, setBoxKey] = useState(1);

  const addBox = () => {
    if (boxes.length < 10) {
      setBoxKey(boxKey + 1);
      setBoxes(boxes.concat(<ColorBox key={boxKey} />));
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
      <h1>Color templates generator</h1>
      <button onClick={addBox}>Add </button>
      <button onClick={removeBox}>Remove</button>
      <p>Colors: {boxes.length}</p>
      <ColorBoxes boxes={boxes} />
    </div>
  );
}

export default App;
