import React, {createContext, useState, useReducer} from "react";


export const ThemeContext = createContext();

export const AppProvider = (props) => {
const [theme, setTheme] = useState('theme');
 return(
    <ThemeContext.Provider value={theme}>
     <label>
        <input type="checkbox" checked={theme === 'dark'} 
        onChange={e => setTheme(e.target.checked? 'dark': 'light')}/>
        {' '}use dark mode
     </label>
      {props.children}
    </ThemeContext.Provider>
 );
}