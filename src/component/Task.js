import React from "react";
import { useState } from "react";
export default function Task({ task }) {
    return (
        <>
            <input type="checkbox" 
            checked={task.done} onChange={!task.done} />
         <label>{task.title}</label>
        </>
    )
}