import { TodosInput } from "./todosinput.component";
import { TodosItem } from "./todosItem.component";
export const TodosList = () => {
  const todos = [];
  const onAddTodoHandler = (text) => {
    console.log(text);
  };
  const onDeleteTodoHandler = (id) => {
    console.log(id);
  };
  const onToggleTodoHandler = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1>My Todos List</h1>
      <TodosInput addTodo={onAddTodoHandler} />
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <TodosItem
                {...todo}
                deleteTodo={onDeleteTodoHandler}
                toggleTodo={onToggleTodoHandler}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
