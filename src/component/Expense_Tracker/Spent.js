import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function Spent(){
    const {expenses} = useContext(AppContext);
    const totalExp = expenses.reduce((total,item) => {
        return( total += item.cost);
    }, 0);
    return(
        <>
                <div className="alert alert-primary">
            <span>Spent:{totalExp} LE</span>
        </div>
        </>
    );
}