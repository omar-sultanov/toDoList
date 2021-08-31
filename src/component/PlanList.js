import React,{useContext} from 'react';
import Plan from './Plan';
import Header from './Header';
import AddPlan from './AddPlan'
import {ContextPlan} from "../Context/ContextPlan";
const PlanList = () => {
    const {tasks} = useContext(ContextPlan)
    return (
        <div className="PlanList">
                <Header/>
                <AddPlan/>
                {tasks.length?
                (<div className="tasks">{tasks.map((task)=>{
                    return <Plan task={task} key={task.id}/> 
                })}</div>):
                (<div className="no-plans">No Tasks, create new tasks</div>)
                 } 
  
        </div>
    )
}

export default PlanList
