import { useState } from "react";

export const GoalsInput = ({ addGoal }) => {
  const [text, setText] = useState("");

  const onChangeInputHandler = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeInputHandler} />
      <button onClick={() => addGoal(text)}>Add Goals</button>
    </div>
  );
};
