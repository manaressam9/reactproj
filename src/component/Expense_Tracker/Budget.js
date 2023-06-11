import React, {useContext, useState} from "react";
import { AppContext } from "./context/AppContext";

export default function Budget(){
   const[isEditing, setIsEditing] = useState(false);
   const {budget, dispatch} = useContext(AppContext);
   const[budgetVal, setBudgetVal] = useState(budget);
    const editBudgetHandler =() => {
        dispatch({
            type: 'edit_budget',
            payload: budgetVal,
        })
    }
    
    let budgetContent;
    if(isEditing){
        budgetContent =(
            <>
            <input type="number" value={budgetVal} onChange={e => setBudgetVal(e.target.value)} />
             <button className="btn btn-primary" onClick={() => {editBudgetHandler(); setIsEditing(false)}}>Save</button>
             </>
            )
    }else{
        budgetContent = (
            <>
            <span>Budget:{budget} LE</span>
            <span><button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button></span>
            </>
        )
    }
   return(
        <>
        <div className="alert alert-secondary">
            {budgetContent}
        </div>
        </>
    );
}