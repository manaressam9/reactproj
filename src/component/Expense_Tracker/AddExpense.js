import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function AddExpense(){
    const { dispatch } = useContext(AppContext);

      const [name, setName] = useState('');
      const [cost, setCost] = useState('');

      const AddExpenseHandler = ()=>{
        
        const expense = {
            id : uuidv4(),
            name: name,
            cost: parseFloat(cost),
        }
       dispatch({
            type: 'add',
            payload: expense,
        })
      }
    return(
        <>
        <h5 className="mt-3"> Add Expense</h5>
       
        <div className="mt-1">
        <label className="form-label">name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" required='required'  placeholder="e.g: shopping"/>
        </div>

        <div className="mt-1">
        <label className="form-label" placeholder="100 ">cost</label>
        <input type="text" value={cost} onChange={e => setCost(e.target.value)}  className="form-control" required='required' placeholder="e.g: 100"/>
        </div>
        <div className="d-flex justify-content-center">
        <button onClick={AddExpenseHandler} className="mt-2 btn btn-primary w-25 " >Add</button>

        </div>
      
        </>
    );
}