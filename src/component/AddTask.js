import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
let id=0;

export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskList, setTaskList] = useState([]);
    
   function addNewTaskHandler(){
    
    setTaskList([
        ...taskList,{
            ID: id++,
            title: taskTitle,
            done:false,
        }
    ])
   }
    return (
        <>
            <input type='text' placeholder="Add task"
             value ={taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
             <button onClick={addNewTaskHandler}>Add</button>
             <div className="p-2">
                <TaskList taskList={taskList}  />
             </div>
        </>
    );
}