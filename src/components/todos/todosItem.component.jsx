export const TodosItem = ({ id, text, toggleTodo, deleteTodo, complete }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={complete}
      />
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
};
