import { GoalProps } from "../../App1";
import CourseGoal from "./CourseGoal";

/* 
adding [] after object declaration is that it is not a single object, it is object array
*/

type CourseGoalListProps = {
    goals: GoalProps[]; // <==
    onDelete: (id: string) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal goal={goal} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
