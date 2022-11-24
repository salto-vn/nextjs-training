export default function Delete(props) {
  const { handleDelete } = props;
  return <button onClick={handleDelete}>Delete</button>;
}
