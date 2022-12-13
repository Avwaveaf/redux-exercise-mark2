import mockAPI from "../../data/mockAPI";

const ActionType = {
  DELETE_GOAL: "DELETE_GOAL",
  ADD_GOAL: "ADD_GOAL",
  RECEIVE_GOALS: "RECEIVE_GOALS",
};

const addGoalsActionCreator = ({ id, text, isCompleted }) => {
  return {
    type: ActionType.ADD_GOAL,
    payload: {
      id,
      text,
      isCompleted,
    },
  };
};

const deleteGoalsActionCreator = ({ id }) => {
  return {
    type: ActionType.DELETE_GOAL,
    payload: {
      id,
    },
  };
};
const receiveGoalsActionCreator = (goals) => {
  return {
    type: "RECEIVE_GOALS",
    payload: {
      goals,
    },
  };
};

const asyncReceiveGoals = () => {
  return async (dispatch) => {
    const goals = await mockAPI.getGoals();
    dispatch(receiveGoalsActionCreator(goals));
  };
};

const asyncAddGoals = (text) => {
  return async (dispatch) => {
    const { id } = await mockAPI.addGoal(text);
    dispatch(addGoalsActionCreator({ id, text }));
  };
};

const asyncDeleteGoals = (id) => {
  return async (dispatch) => {
    dispatch(deleteGoalsActionCreator({ id }));
  };
};

export {
  addGoalsActionCreator,
  deleteGoalsActionCreator,
  receiveGoalsActionCreator,
  asyncAddGoals,
  asyncDeleteGoals,
  asyncReceiveGoals,
  ActionType,
};
