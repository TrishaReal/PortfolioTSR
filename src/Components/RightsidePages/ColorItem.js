const ColorItem = ({ color, setColor }) => (
  <div
    onClick={setColor}
    className="color-item"
    style={{ "--skin-color": color }}
  ></div>
);

export default ColorItem;
