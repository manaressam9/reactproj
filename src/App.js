import React from "react";
//import Game from "./component/Game";
import AddTask from "./component/withUseState/AddTask";
const App = () =>{
    return (
       <div className="container">
        <h1 className="text-center ">
           ToDo List
        </h1>
       {/*<Game />*/} 
       <AddTask />
       </div>
    )
}

export default App