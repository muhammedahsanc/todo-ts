import { MainProps } from "../interfaces";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

function Main({
  formData,
  setFormData,
  EditId,
  setFormDatas,
  setEditId,
  formDatas,
}: MainProps) {
  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/todo/add", {
        name: formData,
      });
      alert(data.message);
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
    if (formData !== "" && !EditId) {
      setFormDatas([
        ...formDatas,
        { name: formData, id: Date.now().toString() },
      ]);
    } else if (EditId && formData !== "") {
      const UpdateData = formDatas.map(({ id, name }) =>
        id === EditId ? { name: formData, id } : { name, id }
      );
      setFormDatas(UpdateData);
      setEditId("");
    } else {
      alert("Enter something...");
    }
    setFormData("");
  };

  return (
    <div className="input-button">
      <Input formData={formData} setFormData={setFormData} />
      <Button submit={() => handleSubmit()} EditId={EditId} />
    </div>
  );
}
export default Main;
