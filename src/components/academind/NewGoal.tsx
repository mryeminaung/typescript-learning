import { useState } from "react";
import { GoalProps } from "../../App";
import { v4 as uuidv4 } from "uuid";

type NewGoalProps = {
    addGoal: (goal: GoalProps) => void;
};

const NewGoal = ({ addGoal }: NewGoalProps) => {
    const [goal, setGoal] = useState<{ title: string; description: string }>({
        title: "",
        description: "",
    });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e?.preventDefault(); // ? means that e obj empty or not
        addGoal({ id: uuidv4(), ...goal });
        setGoal({ title: "", description: "" }); // clear form fields
    };

    const handleGoal: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setGoal({ ...goal, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="title">Your goal</label>
                <input
                    onChange={handleGoal}
                    value={goal.title}
                    name="title"
                    type="text"
                    id="title"
                />
            </p>

            <p>
                <label htmlFor="description">Short description</label>
                <input
                    onChange={handleGoal}
                    value={goal.description}
                    name="description"
                    type="text"
                    id="description"
                />
            </p>
            <button>Add Goal</button>
        </form>
    );
};

export default NewGoal;
