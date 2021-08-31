
import React,{createContext,useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const ContextPlan=createContext();

const ContextPlanProvider = (props) => {
    const [items, setItems] = useState(null)
    const initialState=JSON.parse(localStorage.getItem("tasks"))||[]
    const [tasks, setTasks] = useState(initialState);
    const deletehandler=(id)=>{
      setTasks( tasks.filter(task=> id!==task.id))
     }    
    const addTask=(taskTitle)=>{
        setTasks([...tasks,{title:taskTitle,id:uuidv4()}])
    }       
    const editHandler=(id)=>{
        const item =tasks.find(task=>task.id===id);
        setItems(item);

    }  
    const editTask=(title,id)=>{
        const newTask=tasks.map(task=>(task.id===id)?{title,id}:task)
        setTasks(newTask);
        setItems(null);
    }   
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

    
    return (
        <ContextPlan.Provider value={{tasks,deletehandler,addTask,editHandler,items,editTask}}>
            {props.children}
        </ContextPlan.Provider>
    )
}

export default ContextPlanProvider
