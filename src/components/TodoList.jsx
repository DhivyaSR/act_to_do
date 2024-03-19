
import TodoItem from "./TodoItem";

const TodoList=(props)=>{
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;
    return(
        <div className="bg-[#BDB4EA] flex-grow border rounded-md p-2">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            
            {activityArr.length === 0 ? <p>You haven't added anything yet</p> : ""}
            {
                
                activityArr.map(function(item,index){
                    return(
                        <TodoItem activity_name={item.activity_name} index={index} id={item.id} activityArr={activityArr} setActivityArr={setActivityArr}/>
                    )
                })
            }
        </div>
    );
}

export default TodoList;