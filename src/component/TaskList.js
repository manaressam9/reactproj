import React from "react";
import { useState } from "react";
import Task from "./Task";
export default function TaskList({taskList}){
 function editTaskHandler(){}
 function deleteTaskHandler(){}
  if(taskList.length !==0){
    return(
        <>
        <ul>
            {taskList.map(task => (
                <li key={task.ID}>
                    <Task task={task} onEdit={editTaskHandler} onDelete={deleteTaskHandler} />
                </li>
            ) )}
        </ul>
        </>
    )
  }else{
    return(<h5>No Tasks Added</h5>)
  }
}