import goalSrc from "./assets/goals.jpg";
import Header from "./components/academind/Header";

import { useState } from "react";
import CourseGoalList from "./components/academind/CourseGoalList";
import NewGoal from "./components/academind/NewGoal";

export type GoalProps = {
    id: string;
    title: string;
    description: string;
};

const App1 = () => {
    const [goals, setGoals] = useState<GoalProps[]>([]);

    console.log(goals);

    const handleDelete = (id: string) => {
        setGoals((preGoals) => preGoals.filter((goal) => goal.id !== id));
    };

    const handleGoal = (goal: GoalProps) => {
        setGoals((preGoals) => {
            const newGoal: GoalProps = goal;
            return [...preGoals, newGoal];
        });
    };

    return (
        <main>
            <Header image={{ src: goalSrc, alt: "A list of goals" }}>
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoal addGoal={handleGoal} />
            <CourseGoalList onDelete={handleDelete} goals={goals} />
        </main>
    );
};

export default App1;
