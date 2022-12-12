import React from "react";
import { GoalsList } from "./components/goals/goalsList.component";
import { TodosList } from "./components/todos/todosList.component";
function App() {
  return (
    <>
      <GoalsList />
      <TodosList />
    </>
  );
}

export default App;
