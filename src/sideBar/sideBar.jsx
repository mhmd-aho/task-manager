import AddTask from "./addTask";
export default function SideBar(props){
    const handleClear = ()=>{
        props.setPriority("");
        props.setDeadline("");
    }
    const handleSelect = e =>{
        props.setSelected(e.target.value)
    }
    return(
        <section className="sm:w-1/4 w-full h-1/4 grid grid-cols-3 grid-rows-3 sm:h-full lg:px-4 sm:px-1 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8 gap-1">
            <input onChange={e=>props.setSearchedTask(e.target.value)} type="text" name="searchBar" id="searchBar" placeholder="Search task" className="border border-gray-400 rounded sm:w-3/4 sm:h-9 col-start-1 row-start-1 col-span-2 " />
            <div className="w-full sm:border-b border-gray-400 flex items-center justify-evenly col-start-1 col-span-3 row-start-3  ">
                <button onClick={handleSelect} value='all' className={`${props.selected === "all" && "font-bold border-b-3 sm:border-b-2 border-blue-500"}`}>All</button>
                <button onClick={handleSelect} value='pending' className={`${props.selected === "pending" && "font-bold border-b-3 border-blue-500"}`} >Pending</button>
                <button onClick={handleSelect} value='completed' className={`${props.selected === "completed" && "font-bold border-b-3 border-blue-500"}`}>Completed</button>
            </div>
            <div className="flex sm:flex-col items-center justify-between gap-1 sm:w-3/4 col-start-1 col-span-3 row-start-2">
                <div className="sm:w-full w-1/2 flex items-center justify-between">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={handleClear}  className="text-blue-500 font-semibold">Clear</button>
                </div>
                <div className="sm:w-full flex  sm:flex-col items-center justify-center gap-1">
                    <input onChange={e=>props.setDeadline(e.target.value)} className="bg-gray-200 rounded dark:text-black sm:w-full"  value={props.deadline} placeholder="Deadline" type="date" name="Deadline" id="Deadline"/>
                    <select value={props.priority} onChange={e=>props.setPriority(e.target.value)}  className="bg-gray-200 sm:w-full rounded appearance-none text-center dark:text-black" >
                        <option value="">Priority</option>
                        <option  value="high">High</option>
                        <option  value="medium">Medium</option>
                        <option  value="low">Low</option>
                    </select>
                </div>
            </div>
            <button className="rounded sm:w-1/2 sm:h-9 bg-blue-500 text-blue-50" onClick={()=>props.setPopUp(true)}>Add Task</button>
            {props.popUp && (
                <AddTask setPopUp={props.setPopUp} newTask={props.newTask} setTask={props.setTask} setTasks={props.setTasks} />
            )}
        </section>
    )
}