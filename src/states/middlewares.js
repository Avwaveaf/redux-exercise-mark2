export const todoDeletionCheck = (store) => {
  return (next) => (action) => {
    if (action.type === "DELETE_TODO") {
      const { todos } = store.getState();
      const todosToBeDeleted = todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (!todosToBeDeleted.isCompleted) {
        alert("todo not completed yet, deletion failure");
        return;
      }
    }
    return next(action);
  };
};