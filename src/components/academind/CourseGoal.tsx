// import { PropsWithChildren } from "react";
/* includ children prop declaration */
import { GoalProps } from "../../App";
// interface CourseGoalProps {
//     title: string;
//     description: string;
// }

type CourseGoalProps = {
    goal: GoalProps;
    onDelete: (id: string) => void;
};

const CourseGoal = ({ goal, onDelete }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{goal.title}</h2>
                <p>{goal.description}</p>
            </div>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
        </article>
    );
};

/* const CourseGoal: React.FC<GoalPropsWithChildren> = ({
    children,
    title,
    description,
}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>{children}</div>
            <button>Delete</button>
        </article>
    );
}; */

export default CourseGoal;
