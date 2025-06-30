export default function AddTask(props){
    const handleOnsubmit = e =>{
        e.preventDefault()
        const taskToAdd = { ...props.newTask, done: false }; 
        props.setTasks(prev=>[...prev, taskToAdd])
        props.setPopUp(false)
        props.setTask({id: Date.now(),name:'',description:'',deadline:'',priority:'',done:false})
    }
    const handleChange = (e) => {
    const { name, value } = e.target;
    props.setTask((prev) => ({...prev,[name]: value,}));
    };
    let task = props.newTask
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form className="bg-white  dark:text-black p-6 rounded-lg shadow-lg w-96 space-y-4" onSubmit={handleOnsubmit}>
                        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                        <div className="relative">
                            <input required onChange={handleChange} type="text" name="name" id="name" value={task.name}   className="peer border border-gray-300 w-full px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <label htmlFor="taskName" className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-focus:top-0 peer-focus:text-xs bg-white px-1">Task Name</label>
                        </div>
                        <div className="relative">
                            <input required onChange={handleChange}  type="date" value={task.deadline} name="deadline" id="deadline" placeholder=" " className="peer border border-gray-300 w-full px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <label htmlFor="deadline" className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-focus:top-0 peer-focus:text-xs bg-white px-1">Deadline</label>
                        </div>
                        <select required onChange={handleChange} value={task.priority} name="priority" id="priority" className="border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <div className="relative">
                            <input required onChange={handleChange} value={task.description} type="text" name="description" id="description" placeholder=" " className="peer border border-gray-300 w-full px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <label htmlFor="description" className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-focus:top-0 peer-focus:text-xs bg-white px-1">Description</label>
                        </div>
                        <div className="flex justify-end space-x-2">
                        <button type="button" onClick={()=>props.setPopUp(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save Task</button>
            </div>
        </form>
    </div>
    )
}