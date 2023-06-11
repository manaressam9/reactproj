import React from "react";

export default function AddExpense(){

    return(
        <>
        <h5 className="mt-3"> Add Expense</h5>
        <div className="mt-1">
        <label className="form-label" placeholder="shopping">name</label>
        <input type="text" className="form-control" required='required'/>
        </div>

        <div className="mt-1">
        <label className="form-label" placeholder="100 ">cost</label>
        <input type="text" className="form-control" required='required'/>
        </div>
        <div className="d-flex justify-content-center">
        <button className="mt-2 btn btn-primary w-25 ">Add</button>

        </div>
        </>
    );
}