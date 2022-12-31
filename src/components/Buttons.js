const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.addBox}>Add </button>
      <button onClick={props.removeBox}>Remove</button>
      <button onClick={props.generateColors}>Generate colors</button>
    </div>
  );
};

export default Buttons;
