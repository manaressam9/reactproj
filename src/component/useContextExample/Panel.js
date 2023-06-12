import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Panel(){
    const theme = useContext(ThemeContext);
 return(
    <div className={`container p-2 panel-${theme} `}>
     <h1>hello</h1>
    </div>
 );
}