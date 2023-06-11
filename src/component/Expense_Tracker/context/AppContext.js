//create global initial state

import React, { createContext, useReducer } from "react";

//reducer func of useReducer hook
const AppReducer = (state, action)=>{
switch(action.type){
    case 'add':{
        return{
            ...state,
            expenses:[...state.expenses, action.payload],
        }
    }
    case 'delete':{
        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.payload),
        }
    }
    default:{
        return state;
    }
}
};
const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
    ]
};

//export context object
export const AppContext = createContext();

//Add AppProvider: a component that wraps the components
//which we want to pass the initial state to, used with useReducer
//hook to actually store the global state

export const AppProvider = (props) => {
    const [state, dispatch] =  useReducer(AppReducer, initialState);
    return(
        <AppContext.Provider
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}
        >
            {props.children}
        </AppContext.Provider>
    );
};