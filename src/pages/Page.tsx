import { useState,useEffect } from "react";
import Main from "../components/Main";
import List from "../components/List";
import axios from "axios";
import {Header} from "../components";


function Page() { 
  const [formData, setFormData] = useState<string>("");
  const [formDatas, setFormDatas] = useState<{ _id: string; name: string }[]>([]);
  const [EditId, setEditId] = useState<string>("");
  
  const getDatas = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getTodo/get");
      setFormDatas(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };
  useEffect(() => {
    getDatas();
  }, []);
  const count = formDatas.length;
  
  return ( 
    <div className="App">
      <Header 
      count={count}
      />
      <Main
        getDatas={getDatas}
        formData={formData}
        setFormData={setFormData}
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        EditId={EditId}
        setEditId={setEditId}
      />
      <List
        getDatas={getDatas}
        formData={formData}
        setFormData={setFormData}
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        EditId={EditId}
        setEditId={setEditId}
      />
    </div>
  );
}

export default Page;
