const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={props.addBox}>+ </button>
      <button onClick={props.removeBox}>-</button>
      <button onClick={props.generateColors}>Generate colors</button>
    </div>
  );
};

export default Buttons;
