import React from "react";
import Task from "./Task";
export default function TaskList({taskList, onEdit, onDelete}){
  if(taskList.length !== 0){
    return(
        <>
        <ul>
            {taskList.map(task =>(
                <li key={task.ID}>
                    <Task task={task} onEdit={onEdit} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
        </>
    )
  }else{
    return(
        <h5>No tasks added</h5>
    )
  }
}