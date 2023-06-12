import React, {useReducer, useState} from "react";
import TaskList from "./TaskList";
let id= 0;
function taskReducer(taskList, action){
switch(action.type){
    case 'add':{
        return[...taskList,{
            ID : action.id,
            title: action.title,
            done: false,
        }];
    }
    case 'edit':{
        return taskList.map(task => {
                if(task.ID === action.task.ID){
                    return action.task;
                }else{return task;}
            });
        
    }
    case 'delete':{
        return taskList.filter(t => t.ID !== action.id);
    }
}
}
export default function AddTask(){
    const [taskList, dispatch] = useReducer(taskReducer,[]);
    const [taskTitle, setTaskTitle] = useState('');
    function addTaskHandler(){
          dispatch({
             type: 'add',
             title: taskTitle,
             id: id++,
          })
    }
    function editTaskHandler(task){
        dispatch({
            type: 'edit',
            task:task,
        })
    }
    function deleteTaskHandler(taskId){
        dispatch({
            type:'delete',
            id: taskId,
        })
    }

    return(
        <>
         <input placeholder="add task" type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
         <button onClick={() => {setTaskTitle('');addTaskHandler();}}>Add</button>
         <TaskList taskList={taskList} onEdit={editTaskHandler} onDelete={deleteTaskHandler}/>
        </>
    )
}
