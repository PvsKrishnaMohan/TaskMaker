export const AddTask = (props) => {

    const { taskList, setTaskList, task, setTask } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((eachItem)=>(
                eachItem.id === task.id ? {id:task.id, name:task.name,time:`${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`}: eachItem
            ));
            setTaskList(updatedTaskList);
            setTask({})
        } else {
            const date = new Date();

            const TaskItem = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `⏲️${date.toLocaleTimeString()} 🗓️  ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, TaskItem])
            // e.target.task.value = ""
            setTask({})
        }

    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} placeholder="Add Task" autoComplete="off" maxLength="25" onChange={(e)=>setTask({...task, name:  e.target.value})} />
                <button type="submit" >{task.id? "Update" : "Add"}</button>
            </form>
        </section>
    )
}