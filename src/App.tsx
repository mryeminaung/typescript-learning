import "./App.css";
import ArrObj from "./learning/ArrObj";
import DataTypes from "./learning/DataTypes";
import GenericType from "./learning/GenericType";
import ReturnType from "./learning/ReturnType";
import SpecialTypes from "./learning/SpecialTypes";
import UseState from "./learning/hooks/UseState";
import UseReducer from "./learning/hooks/UseReducer";
import React, { useState } from "react";

type WelcomeProps = {
    name: string;
    age: number;
    isStudent: boolean;
};

const Welcome = (props: WelcomeProps) => {
    return (
        <h2>
            Hello, {props.name}, Age is {props.age}
        </h2>
    );
};

/*
// extending interfac

interface BtnProps {
    color?: string;
    children?: React.ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface superButtonProps extends BtnProps {
    supProps?: string;
}
*/

// intersecting type
type BtnProps = {
    color?: string;
    children?: React.ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

type superButtonProps = BtnProps & {
    supProps?: string;
};

const Button = ({ children, color, setCount, ...rest }: superButtonProps) => {
    const myStyle = { color };

    const handleCount = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setCount((pre) => pre + 1);
    };

    return (
        <button {...rest} onClick={handleCount} style={myStyle}>
            {children}
        </button>
    );
};

function App() {
    const [count, setCount] = useState(0);

    function identity<Type>(arg: Type): Type {
        return arg;
    }

    console.log(identity<string>("hi"));
    console.log(identity<number>(1));
    console.log(identity<[]>([]));
    console.log(identity([1, 2, 3]));

    return (
        <>
            <h1>React With Typescript</h1>
            <Welcome name="Creative Ninja" age={22} isStudent={false} />
            <h2>{count}</h2>
            <Button setCount={setCount} color="brown" ha="ha" test="newProps">
                Increment
            </Button>
            <hr />
            {/* <DataTypes /> */}
            {/* <SpecialTypes /> */}
            {/* <ArrObj /> */}
            {/* <ReturnType /> */}
            {/* <GenericType /> */}
            {/* <UseState /> */}
            {/* <UseReducer /> */}
        </>
    );
}

export default App;
