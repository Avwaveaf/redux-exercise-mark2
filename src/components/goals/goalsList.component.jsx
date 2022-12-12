import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGoalsActionCreator,
  asyncAddGoals,
  asyncDeleteGoals,
  asyncReceiveGoals,
  deleteGoalsActionCreator,
  receiveGoalsActionCreator,
} from "../../states/goals/goals.action";
import { GoalsInput } from "./goalsInput.component";
import { GoalsItem } from "./goalsItem.component";
export const GoalsList = () => {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();
  const onAddGoal = (text) => {
    dispatch(asyncAddGoals(text));
  };
  const onDeleteGoals = (id) => {
    dispatch(asyncDeleteGoals(id));
  };
  useEffect(() => {
    dispatch(asyncReceiveGoals());
  }, [dispatch]);
  return (
    <div>
      <h1>My goals List</h1>
      <GoalsInput addGoal={onAddGoal} />
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <GoalsItem
                id={goal.id}
                text={goal.text}
                deleteGoal={onDeleteGoals}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
