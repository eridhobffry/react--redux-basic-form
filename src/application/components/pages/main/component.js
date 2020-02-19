import React from "react";
import Button from "../../building_blocks/button";
import Input from "../../building_blocks/input";
import { useState } from "react";

const App = ({
  numbers,
  onUpdateNumber,
  onIncrement,
  onDecrement,
  onReset,
  onSave,
  lists,
  onUpdateTextOnList,
  onSaveList
}) => {
  const [text, setText] = useState("");

  const keyPressed = event => {
    if (event.charCode === 13 || event.key === "Enter") {
      return onSaveList(lists.text);
    }
  };

  const listItems = lists.listArray.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <div>
      <p>type: {typeof numbers.tempValue.number}</p>
      <p>{numbers.numberValue.number}</p> <br />
      <Button onClick={onDecrement} text={"Minus"} />{" "}
      <Button onClick={onReset} text={"Reset"} />{" "}
      <Button onClick={onIncrement} text={"Add"} /> <br />
      <Input
        placeholder={"bitte eingeben"}
        type={"number"}
        name={"number"}
        value={isNaN(numbers.tempValue.number) ? "" : numbers.tempValue.number}
        onChange={e => {
          onUpdateNumber(parseInt(e.target.value));
        }}
      />{" "}
      <br />
      <Button
        isDisabled={numbers.tempValue.number === undefined}
        onClick={onSave}
        text={"Save"}
      />{" "}
      <br /> <br /> <br />
      <Input
        placeholder={"bitte eingeben for list"}
        type={"text"}
        name={"text"}
        value={lists.text}
        onChange={e => {
          onUpdateTextOnList(e.target.value);
        }}
        onEnterToInputValue={keyPressed}
      />{" "}
      <br />
      <Button
        isDisabled={lists.text === ""}
        onClick={onSaveList}
        text={"Save List"}
      />{" "}
      <br />
      {lists.listArray.length !== 0 ? <ul>{listItems}</ul> : "Type above..."}
    </div>
  );
};

export default App;
