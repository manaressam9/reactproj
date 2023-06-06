import React from "react";
import PointerMove from "./component/useEffectExample/PointerMove";
// import Game from "./component/Game";
// import AddTask from "./component/withUseState/AddTask";
// import AddTask from "./component/withReducer/AddTask";
// import ChatRoom from "./component/useEffectExample/ChatRoom";
const App = () => {
   return (
      <div className="container">

         {/*<Game />*/}
         {/*
        <h1 className="text-center ">
           ToDo List
        </h1>
       <AddTask /> */}

         {/* <h1 className="text-center ">
            Chat Rooms
         </h1>
         <ChatRoom /> */}

         <h1 className="text-center ">
            Pointer Move
         </h1>
         <PointerMove />
      </div>
   )
}

export default App