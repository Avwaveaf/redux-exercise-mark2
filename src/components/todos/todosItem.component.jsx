export const TodosItem = ({ id, text, toggleTodo, deleteTodo, isComplete }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={isComplete}
      />
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
};
