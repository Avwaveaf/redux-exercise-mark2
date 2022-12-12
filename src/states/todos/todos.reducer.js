const todosReducer = (todos = [], action = {}) => {
  // todos merupakan current state
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.payload];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    case "MODIFY_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
    case "RECEIVE_TODO":
      return action.payload.todos;
    default:
      return todos;
  }
};
export { todosReducer };
