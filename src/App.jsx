import MainPage from "./taskDisplay/mainPage";
import SideBar from "./sideBar/sideBar";
import { useState,useEffect } from "react";
import dark from '/task-manage/img/icons8-dark-mode-50.png';
import light from '/task-manage/img/icons8-sun-60.png';
function App() {
  const [darkMode,setDarkMode] = useState("");
  const [priority,setPriority] = useState("");
  const [deadline,setDeadline] = useState("");
  const [searchedTask,setSearchedTask] = useState("");
  const [popUp,setPopUp] = useState(false);
  const [selected,setSelected] = useState("all")
  const [newTask, setTask] = useState({
    id: Date.now(),
    name: "",
    description: "",
    deadline: "",
    priority: "",
    done: false
  });
  const [tasks,setTasks]= useState(()=>{
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved): []}
  )
  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
  const handleOnClick = ()=>{
    if(darkMode === null){
      setDarkMode("dark")
    }else{
      setDarkMode(null)
    }
  }
  return (
    <div className={`${darkMode} dark:text-blue-50 dark:bg-stone-950 h-screen w-screen`}>
      <header className="w-full h-1/12 sm:px-10 px-2 flex  items-center justify-between border-b border-gray-400 " >
        <h1 className="text-2xl font-bold" >Task Manager</h1>
        <button onClick={handleOnClick}><img className="h-6 w-6 " src={darkMode? dark : light } /></button>
      </header>
      <main className="sm:p-4 p-2 h-11/12 flex sm:flex-row flex-col items-center justify-center " >
        <SideBar selected={selected} setSelected={setSelected} newTask={newTask} setTask={setTask} setSearchedTask={setSearchedTask} setDeadline={setDeadline} deadline={deadline} setPriority={setPriority} priority={priority} popUp={popUp} setPopUp={setPopUp} setTasks={setTasks} />
        <MainPage selected={selected} setTask={setTask}  searchedTask={searchedTask} deadline={deadline} priority={priority} setTasks={setTasks} tasks={tasks}/>
      </main>
    </div>
  )
}

export default App
