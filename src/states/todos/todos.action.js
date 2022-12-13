import mockAPI from "../../data/mockAPI";
const ActionType = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
};
// todo action creator
const addTodoActionCreator = ({ id, text, complete = false }) => {
  return {
    type: ActionType.ADD_TODO,
    payload: {
      id,
      text,
      complete,
    },
  };
};

const deleteTodoActionCreator = ({ id }) => {
  return {
    type: ActionType.DELETE_TODO,
    payload: {
      id,
    },
  };
};

const toggleTodoActionCreator = ({ id }) => {
  return {
    type: ActionType.TOGGLE_TODO,
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
    type: ActionType.RECEIVE_TODO,
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
    dispatch(deleteTodoActionCreator({ id }));
    try {
      await mockAPI.deleteTodo(id);
    } catch (error) {
      alert(error.message);
      dispatch(deleteTodoActionCreator({ id }));
    }
  };
}

function asyncToggleTodo(id) {
  return async (dispatch) => {
    dispatch(toggleTodoActionCreator({ id }));
    try {
      await mockAPI.toggleTodo(id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleTodoActionCreator({ id }));
    }
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
  ActionType,
};
