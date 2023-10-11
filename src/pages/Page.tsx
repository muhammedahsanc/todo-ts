import { useState } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import List from "../components/List";

function Page() {
  const [formData, setFormData] = useState<string>("");
  const [formDatas, setFormDatas] = useState<{ id: string; name: string }[]>(
    []
  );
  const [EditId, setEditId] = useState<string>("");
  return (
    <div className="App">
      <Header />
      <Main
        formData={formData}
        setFormData={setFormData}
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        EditId={EditId}
        setEditId={setEditId}
      />
      <List
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
