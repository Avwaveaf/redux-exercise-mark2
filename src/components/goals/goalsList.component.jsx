import { useDispatch, useSelector } from "react-redux";
import {
  addGoalsActionCreator,
  deleteGoalsActionCreator,
} from "../../states/goals/goals.action";
import { GoalsInput } from "./goalsInput.component";
import { GoalsItem } from "./goalsItem.component";
export const GoalsList = () => {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();
  const onAddGoal = (text) => {
    const id = goals.length + 1;
    dispatch(addGoalsActionCreator({ id, text }));
  };
  const onDeleteGoals = (id) => {
    dispatch(deleteGoalsActionCreator({ id }));
  };
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
