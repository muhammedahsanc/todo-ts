import { MainProps,getProps } from "../interfaces";
import Input from "./Input";
import Button from "./Button";
import axios from "../axiosinstance";
import styled from "styled-components";
  


function Main({
  getDatas,
  formData,
  setFormData,
  EditId,
  setFormDatas,
  setEditId,
  formDatas,
}: MainProps & getProps) {
  const handleSubmit = async () => {
    try {
      if (formData !== "" && !EditId) {
        const { data } = await axios.post("todo/add",{
          name: formData,
        });
        getDatas();
        alert(data.message);
      } else if (EditId && formData !== "") {
        const { data } = await axios.patch("updateTodo/update",
          {
            _id:EditId,
            name: formData
          }
      );
        alert(data.message);
        getDatas();
      } else {
        alert("Enter something...");
      }
      setFormData("");
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };

  // useEffect(() => {
  // }, []);

  return (
    <div className="input-button">
      <Input formData={formData} setFormData={setFormData} />
      <Button submit={() => handleSubmit()} EditId={EditId} />
    </div>
  );
}
const b = styled.button`
background-color: rgb(3, 109, 74);

`;
export default Main;
