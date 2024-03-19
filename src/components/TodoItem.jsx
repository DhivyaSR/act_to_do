const TodoItem=(props)=>{
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const handleDelete=(removeid)=>{
        var tempArr = activityArr.filter(function(item){
            if(removeid === item.id){
                return false;
            }else{
                return true;
            }
        });
        setActivityArr(tempArr);
    }

    return(
        <div className="flex justify-between">
            <p>{props.index+1}. {props.activity_name}</p>
            <button className="text-red-700" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;