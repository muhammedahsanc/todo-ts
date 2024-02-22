import { MainProps, getProps } from '../interfaces'
import Items from './Items'

function List({
    getDatas,
    formData,
    setFormData,
    EditId,
    setFormDatas,
    setEditId,
    formDatas,
}:MainProps & getProps) {
  return (
    <div>
        {formDatas.map((item)=>{
            return(
                <Items 
                getDatas={getDatas}
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