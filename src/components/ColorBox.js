const ColorBox = (props) => {
  return (
    <div
      className="color-container"
      style={{ backgroundColor: `${props.randomColor}` }}
      onClick={props.handleClick}
    >
      <span>{props.randomColor}</span>
    </div>
  );
};

export default ColorBox;
