import { MainProps } from '../interfaces'
import Items from './Items'

function List({
    formData,
    setFormData,
    EditId,
    setFormDatas,
    setEditId,
    formDatas,
}:MainProps) {
  return (
    <div>
        {formDatas.map((item)=>{
            return(
                <Items 
                obj={item}
                setEditId={setEditId}
                setFormData={setFormData}
                setFormDatas={setFormDatas}
                EditId={EditId}
                formData={formData}
                formDatas={formDatas}
                />
            )
        })}
    </div>
  )
}

export default List