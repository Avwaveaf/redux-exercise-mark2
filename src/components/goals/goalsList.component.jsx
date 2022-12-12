import { GoalsInput } from "./goalsInput.component";
import { GoalsItem } from "./goalsItem.component";
export const GoalsList = () => {
  const goals = [];
  const onAddGoal = (text) => {
    console.log(text);
  };
  const onDeleteGoals = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1>My goals List</h1>
      <GoalsInput addGoal={onAddGoal} />
      <ul>
        {goals.map((goal) => {
          return (
            <li>
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
