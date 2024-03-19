import { useState } from "react";

const TodoAdd=(props)=>{
    const [activity,setActivity] = useState("");
    
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const handleActivityChange=(evt)=>{
        setActivity(evt.target.value);
    }

    const handleActivityAdd=()=>{
        setActivityArr([...activityArr,{id:activityArr.length+1,activity_name:activity}]);
        setActivity("");
    }

    return(
        <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input type="text" name="activity_name" id="activity_name" className="border border-black bg-transparent p-1" placeholder="Next Activity?" onChange={handleActivityChange} value={activity}/>
                    <button className="bg-black text-white p-1 border border-black" onClick={handleActivityAdd}>Add</button>
                </div>
        </div>
    );
}

export default TodoAdd;