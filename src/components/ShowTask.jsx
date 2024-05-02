export const ShowTask = (props) => {
    const{taskList,setTaskList,task,setTask}=props;

    const ClearItems=()=>{
        setTaskList([])
    }
    
    const HandleDelete=(id)=>{
        const updatedArray=taskList.filter((eachItem)=>eachItem.id!==id)
        setTaskList(updatedArray);
    }

    const HandleEdit=(id)=>{
        const selectedTaskArray=taskList.find((eachItem)=>eachItem.id ===id)
        // console.log(selectedTaskArray);
        setTask(selectedTaskArray)
    }
    return (
        <section className="showTask">
            <div className="head">
                <div >
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button onClick={ClearItems} className="clearAll">Clear All</button>
            </div>
            <ul>
                {taskList.map((eachItem) => {
                    return (
                        <li key={eachItem.id}>
                            <p>
                                <span className="name">{eachItem.name}</span>
                                <span className="time">{eachItem.time}</span>
                            </p>
                            <i onClick={()=>HandleEdit(eachItem.id)} className="bi bi-pencil-square"></i>
                            <i onClick={()=>HandleDelete(eachItem.id)} className="bi bi-trash"></i>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}