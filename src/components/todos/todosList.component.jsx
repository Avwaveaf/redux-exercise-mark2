import { useDispatch, useSelector } from "react-redux";
import { TodosInput } from "./todosinput.component";
import {
  addTodoActionCreator,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncReceveTodos,
  asyncToggleTodo,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
} from "../../states/todos/todos.action";
import { TodosItem } from "./todosItem.component";
import { useEffect } from "react";
export const TodosList = () => {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();
  const onAddTodoHandler = (text) => {
    dispatch(asyncAddTodo(text));
  };
  const onDeleteTodoHandler = (id) => {
    dispatch(asyncDeleteTodo(id));
    
  };
  const onToggleTodoHandler = (id) => {
    dispatch(asyncToggleTodo(id));
  };
  useEffect(() => {
    dispatch(asyncReceveTodos());
  }, [dispatch]);

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
