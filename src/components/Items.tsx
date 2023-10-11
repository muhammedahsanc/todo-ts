import { MainProps, ItemsExtraProp } from "../interfaces";
import SingleItem from "./SingleItem";

function Items({
  obj,
  setFormData,
  setFormDatas,
  setEditId,
  formDatas,
}: MainProps & ItemsExtraProp) {
  const handleDelete = (dId: string) => {
    alert("Are you sure..");
    setFormDatas(formDatas.filter((item) => item.id !== dId));
    setFormData("");
  };
  const handleEdit = (eid: string) => {
    formDatas.forEach((e) => {
      if (e.id === eid) {
        setFormData(e.name);
        setEditId(e.id);
      }
    });
  };
  return (
    <div>
      <table>
        <SingleItem
          name={obj.name}
          edit={() => handleEdit(obj.id)}
          deleteItem={() => handleDelete(obj.id)}
        />
      </table>
    </div>
  );
}

export default Items;
