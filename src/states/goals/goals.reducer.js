const goalsReducer = (goals = [], action = {}) => {
  switch (action.type) {
    case "ADD_GOAL":
      return [...goals, action.payload];
    case "DELETE_GOAL":
      return goals.filter((goal) => goal.id !== action.payload.id);
    case "RECEIVE_GOALS":
      return action.payload.goals;
    default:
      return goals;
  }
};

export { goalsReducer };
