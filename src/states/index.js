import { configureStore } from "@reduxjs/toolkit";

import { thunk, todoDeletionCheck } from "./middlewares";
import { todosReducer } from "./todos/todos.reducer";
import { goalsReducer } from "./goals/goals.reducer";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    goals: goalsReducer,
  },
  middleware: [thunk, todoDeletionCheck],
});

export { store };
