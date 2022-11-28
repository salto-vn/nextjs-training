import { useState } from "react";
import Delete from "components/DucAnh/Delete";
import Edit from "components/DucAnh/Edit";
import Save from "components/DucAnh/Save";

export default function Row(props) {
  const { name, isChecked, handleDeleteItem, handleCheckbox } = props;
  const [mode, setMode] = useState(false);
  const [libName, setLibName] = useState(name);

  function handleChangeModeSave() {
    setMode(true);
  }

  function handleChangeModeEdit() {
    if (libName !== "") {
      setMode(false);
    }
  }

  function updateValue(e) {
    setLibName(e.target.value);
  }

  return (
    <div className="library-row">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        value={isChecked}
        onChange={handleCheckbox}
      />
      {mode === false ? (
        <label>{libName}</label>
      ) : (
        <input type="text" value={libName} onChange={(e) => updateValue(e)} />
      )}
      {mode === false ? (
        <Edit handleChange={handleChangeModeSave} />
      ) : (
        <Save handleChange={handleChangeModeEdit} />
      )}

      <Delete handleDelete={handleDeleteItem} />
      <br></br>
    </div>
  );
}
