import Row from "../Row";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const array = [
    { id: uuidv4(), value: "ReactJS", isChecked: false },
    { id: uuidv4(), value: "VueJS", isChecked: true },
    { id: uuidv4(), value: "NextJS", isChecked: true },
    { id: uuidv4(), value: "NodeJS", isChecked: false },
  ];

  const [libraries, setLibraries] = useState(array);
  const [text, setText] = useState("");

  function updateArray() {
    if (text !== "") {
      const newItem = { id: uuidv4(), value: text, isChecked: false };
      setLibraries((prevState) => [...prevState, newItem]);
      setText("");
    }
  }

  function setValueText(e) {
    setText(e.target.value);
  }

  function handleDeleteItem(id) {
    setLibraries((prevState) => prevState.filter((item) => item.id !== id));
  }

  function handleCheckbox(id) {
    setLibraries(
      libraries.map((item) => {
        if (item.id === id) {
          const a = !item.isChecked;
          return { ...item, isChecked: a };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div>
      <input
        type="text"
        id="add-task"
        name="add-task"
        value={text}
        onChange={(e) => setValueText(e)}
      />
      <button onClick={updateArray}>Add</button>
      <br></br>
      {libraries &&
        libraries.map((item) => {
          return (
            <Row
              name={item.value}
              key={item.id}
              isChecked={item.isChecked}
              handleDeleteItem={() => handleDeleteItem(item.id)}
              handleCheckbox={() => handleCheckbox(item.id)}
            />
          );
        })}
    </div>
  );
}
