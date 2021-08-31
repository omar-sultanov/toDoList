import React,{useContext} from 'react'
import { ContextPlan } from '../Context/ContextPlan';

const Plan = ({task}) => {


    const {deletehandler,editHandler} = useContext(ContextPlan);

    return (
        <div className="Plan">
            <span>{task.title} </span>
            
            <div className="buttons">
                <button onClick={()=>deletehandler(task.id)}><i className="fas fa-trash-alt"></i></button>
                <button onClick={()=>editHandler(task.id)}><i className="fas fa-pen"></i></button>
            </div>
        </div>
    )
}

export default Plan
