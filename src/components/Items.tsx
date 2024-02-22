import axios from "../axiosinstance";
import { MainProps, ItemsExtraProp, getProps } from "../interfaces";
import SingleItem from "./SingleItem";


function Items({
  getDatas,
  obj,
  setFormData,
  setFormDatas,
  setEditId,
  formDatas,
}: MainProps & ItemsExtraProp & getProps) {


  const handleDelete = async(dId: string) => {
    const response = await axios.delete("deleteTodo/delete/"+dId);
    console.log(response.data);
    alert("Are you sure..");
  getDatas();
    // setFormDatas(formDatas.filter((item) => item.id !== dId));
    setFormData("");
  };
  const handleEdit = (eid: string) => {
    formDatas.forEach((e) => {
      if (e._id === eid){
        setFormData(e.name);
        setEditId(e._id);
      }
    });
  };
  return (
    <div>
      
       <table> 
        <SingleItem

         name={obj.name}
         edit={() => handleEdit(obj._id)}
         deleteItem={() => handleDelete(obj._id)}
        
       /> 
            
      </table>
    </div>
  );
}

export default Items;
