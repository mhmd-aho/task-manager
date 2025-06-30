import { useState } from 'react';
import check from '../img/check-svgrepo-com.svg';
import trash from '../img/trash-blank-alt-svgrepo-com.svg';
export default function Task(props){
    const [hover,setHover] = useState(false);
    let className = ""
    if(props.priority === "high"){
        className = "bg-black dark:bg-blue-50 " ;
    }else if(props.priority === "medium"){
                className = "bg-black/70 dark:bg-blue-50/70" ;
    }else{
                className = "bg-black/40 dark:bg-blue-50/40" ;
    }
    return(
        <div  onMouseOver={() => setHover(true)} onMouseOut={()=>setHover(false)}  className={`relative w-full h-20 px-2 border-b border-gray-400 flex items-center lg:gap-36 sm:gap-10 text-sm text-center ${props.done? "bg-green-100 text-black" : ""}`}>
                    <h2 className="w-28 sm:text-base text-sm" >{props.name}</h2>
                    <p className="text-gray-400 w-28 sm:text-base text-sm" >{props.description}</p>
                    <p className="text-gray-400 w-28" >{props.deadline}</p>
                    <p className={`w-28 font-semibold text-center rounded text-blue-50 dark:text-black ${className} sm:text-base text-sm`}>{props.priority}</p>  
                {hover && (
                    <div className="absolute xl:top-1/2 xl:right-4 right-1 top-0 xl:mt-0 mt-1 xl:-translate-y-1/2 flex items-center justify-between gap-2 xl:w-16 xl:h-7  opacity-65">
                        <button className="bg-red-200 hover:bg-red-300 transition rounded flex items-center justify-center w-1/2 h-full" onClick={()=>props.onDelete(props.id)}><img src={trash} alt="Delete" className="w-4 h-4" /></button>
                        {!props.done && 
                            (<button onClick={() => props.setTask({ done: true })}  className="bg-green-200 hover:bg-green-300 transition rounded flex items-center justify-center w-1/2 h-full"><img src={check} alt="Complete" className="w-4 h-4" /></button>)
                        }
                    </div>
                )}
        </div>
    )
}