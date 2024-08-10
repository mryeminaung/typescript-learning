import { Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";

type TestProps = {
    message: string;
    children: React.ReactNode;
};

type CounterActionProps = "INCREMENT" | "DECREMENT" | "RESET";

const Test = ({ message, children }: TestProps) => {
    const [count, setCount] = useState(0);

    const handleCount = (action: CounterActionProps) => {
        if (action === "INCREMENT") {
            setCount((pre) => pre + 1);
        } else if (action === "DECREMENT") {
            setCount((pre) => pre - 1);
        } else if (action === "RESET") {
            setCount(0);
        }
    };

    return (
        <div>
            <h1>{message}</h1>
            <p>{children}</p>
            <Counter count={count} handleCount={handleCount} />
        </div>
    );
};

type CounterProps = {
    count: number;
    handleCount: (action: CounterActionProps) => void;
};

const Counter = ({ count, handleCount }: CounterProps) => {
    return (
        <div>
            <h1>Counter : {count}</h1>
            <div className="space-x-2">
                <button
                    className="px-2 py-1 bg-slate-100"
                    onClick={() => handleCount("DECREMENT")}
                >
                    <Minus />
                </button>
                <button
                    className="px-2 py-1 bg-slate-100"
                    onClick={() => handleCount("RESET")}
                >
                    <RotateCcw />
                </button>
                <button
                    className="px-2 py-1 bg-slate-100"
                    onClick={() => handleCount("INCREMENT")}
                >
                    <Plus />
                </button>
            </div>
        </div>
    );
};
export default Test;
