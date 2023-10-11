type SingleItemProps = {
  name: string;
  edit: () => void;
  deleteItem: () => void;
};
function SingleItem({ name, edit, deleteItem }: SingleItemProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button onClick={() => edit()}>Edit</button>
        <button onClick={() => deleteItem()}>Delete</button>
      </td>
    </tr>
  );
}

export default SingleItem;
