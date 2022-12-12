// todo action creator
const addTodoActionCreator = ({ id, text, isCompleted = false }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      isCompleted,
    },
  };
};

const deleteTodoActionCreator = ({ id }) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

const toggleTodoActionCreator = ({ id }) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};

const modifyTodoActionCreator = ({ id, text }) => {
  return {
    type: "MODIFY_TODO",
    payload: {
      id,
      text,
    },
  };
};

export {
  addTodoActionCreator,
  deleteTodoActionCreator,
  modifyTodoActionCreator,
  toggleTodoActionCreator,
};
