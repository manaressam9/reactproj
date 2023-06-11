import React from "react";

const ExpenseSearch = () => {

    const ExpensesList = [
        { id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
    ];
    return (
        <>
            <h5 className="mt-3">Expenses List</h5>
            <div className="px-2">
                <input className="form-control" type="text" placeholder="type to search" />
            </div>
            <div className="mt-2 px-2">
            <ul className="list-group">
            {ExpensesList.map(expense => (
                <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {expense.name}
                    <div>
                    <span className=" badge bg-primary rounded-pill mr-3">
                    {expense.cost} 
                        </span>
                       
                        <i className="bi bi-trash"></i>
                    </div>
                </li>
            ))}
            </ul>
            </div>
        </>
    );
}

export default ExpenseSearch