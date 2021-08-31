import React from 'react'
import './App.css'
import PlanList from './component/PlanList'
import ContextPlanProvider from './Context/ContextPlan'
const App = () => {
    return (
        <ContextPlanProvider>
            <div className="App">
                <PlanList/>
            </div>
        </ContextPlanProvider>
    )
}

export default App
