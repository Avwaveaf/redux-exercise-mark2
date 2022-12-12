import mockAPI from "../../data/mockAPI";

// todo action creator
const addTodoActionCreator = ({ id, text, complete = false }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete,
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
const receiveTodosActionCreator = (todos) => {
  return {
    type: "RECEIVE_TODO",
    payload: {
      todos,
    },
  };
};
const asyncReceveTodos = () => {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  };
};
function asyncAddTodo(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
}

function asyncDeleteTodo(id) {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator({ id }));
  };
}

function asyncToggleTodo(id) {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleTodoActionCreator({ id }));
  };
}

export {
  addTodoActionCreator,
  deleteTodoActionCreator,
  modifyTodoActionCreator,
  toggleTodoActionCreator,
  receiveTodosActionCreator,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncReceveTodos,
  asyncToggleTodo,
};
