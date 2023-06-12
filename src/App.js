import React from "react";
import { AppProvider } from "./component/useContextExample/ThemeContext";
import Panel from "./component/useContextExample/Panel";
// import Budget from "./component/Expense_Tracker/Budget";
// import Remaining from "./component/Expense_Tracker/Remaining";
// import Spent from "./component/Expense_Tracker/Spent";
// import ExpenseSearch from "./component/Expense_Tracker/ExpenseSearch";
// import AddExpense from "./component/Expense_Tracker/AddExpense";
// import { AppProvider } from "./component/Expense_Tracker/context/AppContext";
const App = () => {
   return (
      <>
       {/* <AppProvider>
         <div className="container">
       <h1 className="text-center mt-5">My Expenses Planner</h1>
        <div className="row mt-3">
          <div className="col-sm"><Budget /></div>
          <div className="col-sm"><Remaining /></div>
          <div className="col-sm"><Spent /></div>
        </div>
        <div className="row mt-3">
         <ExpenseSearch />
        </div>
        <div className="row mt-3">
         <AddExpense/>
        </div>
      </div>
      </AppProvider>  */}

    <AppProvider>
      <Panel />
    </AppProvider>
      </>
   )
}

export default App
//import Counter from "./component/usRefExample/Counter";
// import StopWatch from "./component/usRefExample/StopWatch";
// import PointerMove from "./component/useEffectExample/PointerMove";
// import Counter from "./component/useEffectExample/Counter";
// import Game from "./component/Game";
// import AddTask from "./component/withUseState/AddTask";
// import AddTask from "./component/withReducer/AddTask";
// import ChatRoom from "./component/useEffectExample/ChatRoom";

/*Examples*/
/*<Game />*/

/*<h1 className="text-center ">
  ToDo List
</h1>
<AddTask /> */

/* <h1 className="text-center ">
   Chat Rooms
</h1>
<ChatRoom /> */

/* <h1 className="text-center ">
   Pointer Move
</h1>
<PointerMove />
<Counter /> */

/* <Counter />
<StopWatch /> */