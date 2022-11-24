import { useState } from "react";
import Delete from "../Delete";
import Edit from "../Edit";
import Save from "../Save";

export default function Row(props) {
  const { name } = props;

  const [mode, setMode] = useState(0);

  const [libName, setLibName] = useState(name);

  function handleChangeModeSave() {
    setMode(1);
  }

  function handleChangeModeEdit() {
    if (libName !== "") {
      setMode(0);
    }
  }

  function updateValue(e) {
    setLibName(e.target.value);
  }

  return (
    <div>
      <input type="checkbox" />
      {mode === 0 ? (
        <label>{libName}</label>
      ) : (
        <input type="text" value={libName} onChange={(e) => updateValue(e)} />
      )}
      {mode === 0 ? (
        <Edit handleChange={handleChangeModeSave} />
      ) : (
        <Save handleChange={handleChangeModeEdit} />
      )}

      <Delete />
      <br></br>
    </div>
  );
}
