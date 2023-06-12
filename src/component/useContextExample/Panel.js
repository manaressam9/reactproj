import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Panel(){
    const {theme ,setTheme}= useContext(ThemeContext);
 return(
    <>
   
    <div className={`container p-2 panel-${theme} `}>
    <label>
        <input type="checkbox" checked={theme === 'dark'} 
        onChange={e => setTheme(e.target.checked? 'dark': 'light')}/>
        {' '}use dark mode
     </label>
     <h1>hello</h1>
    </div>
    </>
 );
}