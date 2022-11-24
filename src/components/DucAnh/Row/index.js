import Delete from "../Delete";
import Edit from "../Edit";

export default function Row(props) {
  const { name } = props;
  return (
    <div>
      <input type="checkbox" id="react-js" name="react-js" value="ReactJS" />
      <label>{name}</label>
      <Edit />
      <Delete />
      <br></br>
    </div>
  );
}
