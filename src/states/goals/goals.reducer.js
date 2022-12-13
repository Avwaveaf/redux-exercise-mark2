import { ActionType } from "./goals.action";
const goalsReducer = (goals = [], action = {}) => {
  switch (action.type) {
    case ActionType.ADD_GOAL:
      return [...goals, action.payload];
    case ActionType.DELETE_GOAL:
      return goals.filter((goal) => goal.id !== action.payload.id);
    case ActionType.RECEIVE_GOALS:
      return action.payload.goals;
    default:
      return goals;
  }
};

export { goalsReducer };
