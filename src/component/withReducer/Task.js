import React ,{useState} from "react";

export default function Task({task, onEdit, onDelete}){
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if(isEditing){
        taskContent = (
            <>
            <input type="text" value={task.title} onChange={e => {onEdit({...task, title: e.target.value});}} />
            <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    }else{
        taskContent =(
            <>
            {task.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return(
        <>
         <input type="checkbox" checked={task.done} onChange={e => {onEdit({...task, done:e.target.checked})}} />
        {taskContent}
        <button onClick={() => {onDelete(task.ID)}}>Delete</button>
        </>
    )
}