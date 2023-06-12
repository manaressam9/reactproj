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

   function editTaskHandler(editedTask){
   let editedTasks= taskList.map(task => {
       if(task.ID === editedTask.ID){
        return editedTask;
       }else{return task;}
   })
   setTaskList(editedTasks);
   }
   function deleteTaskHandler(taskID){
    setTaskList(taskList.filter(t => t.ID !== taskID));
   }
    return (
        <>
            <input type='text' placeholder="Add task"
             value ={taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
             <button onClick={() => {setTaskTitle(''); addNewTaskHandler();}}>Add</button>
             <div className="p-2">
                <TaskList taskList={taskList} onEdit={editTaskHandler} onDelete={deleteTaskHandler}/>
             </div>
        </>
    );
}