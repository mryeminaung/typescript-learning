import { useReducer } from "react";

const initialValue = { count: 0 };

type CounterState = { count: number };

// Discriminated Unions

type UpdateAction = {
    type: "INCREMENT" | "DECREMENT" | "RESET";
    payload: number;
};

type ResetAction = {
    type: "Reset";
};

type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - action.payload };
        case "RESET":
            return initialValue;
        default:
            return state;
    }
};

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <>
            <h2>useReducer with Typescript</h2>
            <button
                onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}
            >
                Decrement
            </button>
            <button
                onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}
            >
                Increment
            </button>

            <h1>{state.count}</h1>

            <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
                Reset
            </button>
        </>
    );
}

export default UseReducer;
