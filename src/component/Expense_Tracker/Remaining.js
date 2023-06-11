import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function Remaining(){
    const {expenses, budget} = useContext(AppContext);

    const spent = expenses.reduce((spent,item) => {
        return ( spent += item.cost);
    },0);
    
    const alertType = spent > budget ? 'alert-danger': 'alert-success';
    const remained = budget - spent;
    return(
        <>
                <div className={`alert ${alertType} `}>
            <span>Remaining: {remained} LE</span>
        </div>
        </>
    );
}