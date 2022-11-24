import Row from "../Row";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const array = [
    { id: uuidv4(), value: "ReactJS" },
    { id: uuidv4(), value: "VueJS" },
  ];

  const [libraries, setLibraries] = useState(array);
  const [text, setText] = useState("");

  function updateArray() {
    if (text !== "") {
      const newItem = { id: uuidv4(), value: text };
      setLibraries((prevState) => [...prevState, newItem]);
      setText("");
    }
  }

  function setValueText(e) {
    setText(e.target.value);
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
          return <Row name={item.value} key={item.id} />;
        })}
    </div>
  );
}
