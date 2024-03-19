import TodoAdd from "./TodoAdd";
import { useState } from "react";
import TodoList from "./TodoList";

const ToDoContainer=()=>{
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity_name:"Go for a Walk"
        },{
            id:2,
            activity_name:"Have a Breakfast"
        },{
            id:3,
            activity_name:"Go to Office"
        }
    ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <TodoAdd activityArr={activityArr} setActivityArr={setActivityArr}/>
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>        
    );
}

export default ToDoContainer;