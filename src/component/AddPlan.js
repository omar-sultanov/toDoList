import React,{useState,useContext,useEffect} from 'react';
import {ContextPlan} from '../Context/ContextPlan';
import '../App.css'
const AddPlan = () => {
    const {addTask,items,editTask} = useContext(ContextPlan)
    const [addItem, setAddItem] = useState("")
    const onChangeHandler=(e)=>{
        setAddItem(e.target.value);
    }
    const onClickHandler=(e)=>{
        e.preventDefault()
        if (!items) {
            addTask(addItem);
            setAddItem("");
        }
        else{
            editTask(addItem,items.id)
        }
    }
    useEffect(() => {
      if (items) {
          setAddItem(items.title)
      }else{
          setAddItem("")
      }
    }, [items])
   
    return (
        <form className="AddPlan" onSubmit={onClickHandler}>
            <input onChange={(e)=>onChangeHandler(e)} required value={addItem} placeholder="Add task..."/>
            <button >{!items?"Add Task":"Edit Task"}</button>
        </form>
    )
}

export default AddPlan
