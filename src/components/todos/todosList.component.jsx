import { useDispatch, useSelector } from "react-redux";
import { TodosInput } from "./todosinput.component";
import {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
} from "../../states/todos/todos.action";
import { TodosItem } from "./todosItem.component";
export const TodosList = () => {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();
  const onAddTodoHandler = (text) => {
    const id = todos.length + 1;
    dispatch(
      addTodoActionCreator({
        id,
        text,
      })
    );
  };
  const onDeleteTodoHandler = (id) => {
    
    dispatch(deleteTodoActionCreator({ id }));
  };
  const onToggleTodoHandler = (id) => {
    dispatch(toggleTodoActionCreator({ id }));
  };
  console.log(todos);
  return (
    <div>
      <h1>My Todos List</h1>
      <TodosInput addTodo={onAddTodoHandler} />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
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
