import React, { ReactNode } from "react";
import "./App.css";
import ArrObj from "./learning/ArrObj";
import DataTypes from "./learning/DataTypes";
import GenericType from "./learning/GenericType";
import ReturnType from "./learning/ReturnType";
import SpecialTypes from "./learning/SpecialTypes";

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

type PersonProps = {
    name: {
        firstName: string;
        lastName: string;
    };
    children?: JSX.Element;
};

const Person = ({ name, children }: PersonProps) => {
    console.log(children);
    return (
        <div>
            <h1>
                Hi, {name.firstName} {name.lastName}
            </h1>
            <h3>{children}</h3>
        </div>
    );
};

function App() {
    let personInfo = {
        firstName: "John",
        lastName: "Wick",
    };

    return (
        <>
            <h1>React With Typescript</h1>
            <Welcome name="Creative Ninja" age={22} isStudent={false} />
            <Person name={personInfo}>
                <p>Children of Person Component</p>
            </Person>
            {/* <DataTypes /> */}
            {/* <SpecialTypes /> */}
            {/* <ArrObj /> */}
            {/* <ReturnType /> */}
            {/* <GenericType /> */}
        </>
    );
}

export default App;
