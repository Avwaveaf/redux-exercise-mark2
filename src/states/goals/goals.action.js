const addGoalsActionCreator = ({ id, text, isCompleted }) => {
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text,
      isCompleted,
    },
  };
};

const deleteGoalsActionCreator = ({ id }) => {
  return {
    type: "DELETE_GOAL",
    payload: {
      id,
    },
  };
};

export { addGoalsActionCreator, deleteGoalsActionCreator };
