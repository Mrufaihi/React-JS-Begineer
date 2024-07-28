import { useState } from 'react';

function ColorPicker() {
  //  STATEFUL VAR COLOR
  const [color, setColor] = useState('#333');
  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color">
      <h1 className="color__heading">Color Picker</h1>
      <div className="color__display" style={{ background: color }}></div>
      <input
        className="color__picker"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <p className="color__selected">Picked Color: {color}</p>
    </div>
  );
}
export default ColorPicker;
