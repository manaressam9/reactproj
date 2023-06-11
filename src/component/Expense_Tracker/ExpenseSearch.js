import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";

const ExpenseSearch = () => {

    /*const ExpensesList = [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50 },
    ];*/

    const { expenses, dispatch } = useContext(AppContext);
    const [filteredResult, setFilteredResult] = useState(expenses || []);
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
    
        setFilteredResult(expenses);
    }, [expenses]);

    const deleteExpHandler = (id) => {
        dispatch({
            type: 'delete',
            payload: id,
        })
    }

    const searchExpenses = () => {
        const searchResults = expenses.filter((filteredExpense) =>
        filteredExpense.name.toLowerCase().includes(searchVal)
    );
    setFilteredResult(searchResults);
    }
    return (
        <>
            <h5 className="mt-3">Expenses List</h5>
            <div className="px-2 d-flex justify-conetent-between">
                <input className="form-control " value={searchVal} onChange={e => setSearchVal(e.target.value)}  type="text" placeholder="type to search" />
                <button className="btn btn-primary" onClick={searchExpenses}>Search</button>
            </div>
            <div className="mt-2 px-2">
                <ul className="list-group">
                    {filteredResult.map(expense => (
                        <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {expense.name}
                            <div>
                                <span className=" badge bg-primary rounded-pill mr-3">
                                    {expense.cost}
                                </span>

                                <button onClick={() => { deleteExpHandler(expense.id) }} className="btn ">  <i className="bi bi-trash" ></i></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ExpenseSearch