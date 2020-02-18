import React from "react";
import Button from "../../building_blocks/button";
import Input from "../../building_blocks/input";

const App = ({
  numbers,
  onUpdateNumber,
  onIncrement,
  onDecrement,
  onReset,
  onSave
}) => {
  return (
    <div>
      <p>type: {typeof numbers.tempValue.number}</p>
      <p>{numbers.numberValue.number}</p> <br />
      <Button onClick={onDecrement} text={"Minus"} />{" "}
      <Button onClick={onReset} text={"Reset"} />{" "}
      <Button onClick={onIncrement} text={"Add"} /> <br />
      <input
        placeholder="bitte eingeben"
        type="number"
        name="number"
        value={isNaN(numbers.tempValue.number) ? "" : numbers.tempValue.number}
        onChange={e => {
          onUpdateNumber(parseInt(e.target.value));
        }}
      />{" "}
      <br />
      <Button onClick={onSave} text={"Save"} />
    </div>
  );
};

export default App;
