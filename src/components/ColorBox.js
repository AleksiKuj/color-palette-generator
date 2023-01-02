const ColorBox = (props) => {
  return (
    <div
      className="color-container"
      style={{ backgroundColor: `${props.randomColor}` }}
      onClick={props.handleClick}
    >
      <div className="hex-and-name">
        <p>{props.randomColor}</p>
        <p>{props.colorName(props.randomColor)}</p>
      </div>
    </div>
  );
};

export default ColorBox;
