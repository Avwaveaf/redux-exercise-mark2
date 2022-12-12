import { useState } from "react";
export const TodosInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const onInputChangeHandler = ({ target }) => {
    return setText(target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onInputChangeHandler} />
      <button onClick={() => addTodo(text)}>Add Todo</button>
    </div>
  );
};
