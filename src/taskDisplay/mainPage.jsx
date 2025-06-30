import Task from "./task";
export default function MainPage(props){
    const handleDelete = (id) => {
        props.setTasks(prev => prev.filter(task => task.id !== id));
    };
    let displayTasks = props.tasks;
    if (props.searchedTask ) displayTasks = props.tasks.filter(task => task.name.toLowerCase() === props.searchedTask.toLowerCase());
    if (props.priority && props.deadline) {
        displayTasks = props.tasks.filter(task => task.priority === props.priority && task.deadline === props.deadline);
    } else if (props.priority) {
        displayTasks = props.tasks.filter(task => task.priority === props.priority);
    } else if (props.deadline) {
    displayTasks = props.tasks.filter(task => task.deadline === props.deadline);
    }
    if(props.selected === 'completed' && props.deadline && props.priority){
        displayTasks = props.tasks.filter(task => task.done === true && task.deadline === props.deadline && task.priority === props.priority);
    }else if(props.selected === 'completed' && props.deadline){
        displayTasks = props.tasks.filter(task => task.done === true && task.deadline === props.deadline);
    }else if(props.selected === 'completed' &&  props.priority){
        displayTasks = props.tasks.filter(task => task.done === true && task.priority === props.priority);
    }else if(props.selected === 'pending' && props.deadline && props.priority){
        displayTasks = props.tasks.filter(task => task.done === false && task.deadline === props.deadline && task.priority === props.priority);
    }else if(props.selected === 'pending' && props.deadline){
        displayTasks = props.tasks.filter(task => task.done === false && task.deadline === props.deadline);
    }else if(props.selected === 'pending' &&  props.priority){
        displayTasks = props.tasks.filter(task => task.done === false && task.priority === props.priority);
    }else if(props.selected === 'completed' ){
        displayTasks = props.tasks.filter(task => task.done === true);
    }else if(props.selected === 'pending'){
        displayTasks = props.tasks.filter(task => task.done === false);
    }
    const updateTask = (id, updatedFields) => {
    props.setTasks(prev => 
        prev.map(task => 
            task.id === id ? { ...task, ...updatedFields } : task
        )
    );
};
    return(
        <section className="sm:w-3/4 w-full h-3/4 border border-gray-400  rounded-2xl">
            <div className="w-full px-2 h-1/6 flex items-center lg:gap-36 sm:gap-10 border-b border-gray-400 text-center" >
                <p className="sm:text-lg text-sm font-semibold w-28" >Task</p>
                <p className="sm:text-lg text-sm font-semibold w-28" >Description</p>
                <p className="sm:text-lg text-sm font-semibold w-28" >Deadline</p>
                <p className="sm:text-lg text-sm font-semibold w-28" >Priority</p>
            </div>
            <div className="max-h-5/6 pb-3 overflow-y-scroll">
                {props.tasks.length === 0?
                (<p className="text-center text-gray-500 mt-4">No tasks added yet.</p>):
                (displayTasks.map(task=>(
                    <Task setTask={(updatedFields) => updateTask(task.id, updatedFields)} done={task.done} key={task.id} id={task.id} onDelete={handleDelete} name={task.name} description={task.description} deadline={task.deadline} priority={task.priority}/>
                )))
                }
            </div>
        </section>
    )
}