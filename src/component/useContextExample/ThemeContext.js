import React, {createContext, useState, useReducer} from "react";


export const ThemeContext = createContext();

export const AppProvider = (props) => {
const [theme, setTheme] = useState('theme');
 return(
    <ThemeContext.Provider value={{theme,setTheme}}>
     
      {props.children}
    </ThemeContext.Provider>
 );
}