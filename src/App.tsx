// import ArrObj from "./learning/ArrObj";
// import DataTypes from "./learning/DataTypes";
// import GenericType from "./learning/GenericType";
// import ReturnType from "./learning/ReturnType";
// import SpecialTypes from "./learning/SpecialTypes";
// import UseState from "./learning/hooks/UseState";
// import UseReducer from "./learning/hooks/UseReducer";
// import React, { useState } from "react";
// import Button from "./learning/Button";

import EnumType from "./learning/EnumType";

type WelcomeProps = {
    name: string;
    age: 20 | 22 | 24;
    isStudent: boolean;
    padding?: [number, number, number, number];
};

const Welcome = ({ name, age, ...rest }: WelcomeProps): React.JSX.Element => {
    console.log(rest);

    return (
        <h2 className="text-2xl">
            Hello, {name}, Age is {age}
        </h2>
    );
};

// type ItemProps = {
//     children: React.ReactNode;
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// };

// const Item = ({ title, completed }: ItemProps) => {
//     return (
//         <li>
//             {title} - <b>{completed ? "Completed" : "Uncompleted"}</b>
//         </li>
//     );
// };

function App() {
    // const [count, setCount] = useState(0);

    // type TodoProp = {
    //     userId: number;
    //     id: number;
    //     title: string;
    //     completed: boolean;
    // };

    // const [task, setTask] = useState<TodoProp | null>(null);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((response) => response.json())
    //         .then((data: null) => setTask(data));
    // }, []);

    // interface TodoProps {
    //     userId: number;
    //     id: number;
    //     title: string;
    //     completed: boolean;
    // }

    // const [todos, setTodos] = useState<TodoProps[] | null>(null);

    type Color = "red" | "blue" | "green" | "yellow";

    const favColors: Color[] = ["blue", "green", "yellow"];

    console.log(favColors);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((response) => response.json())
    //         .then((data: null) => setTodos(data));
    // }, []);

    return (
        <div className="container mx-auto">
            {/* <h4>{JSON.stringify(task)}</h4> */}
            <h1 className="text-3xl">React With Typescript</h1>
            <Welcome
                padding={[1, 2, 3, 4]}
                name="Creative Ninja"
                age={20}
                isStudent={false}
            />
            {/* {todos ? (
                todos?.map((todo) => (
                    <Item key={todo.id} {...todo}>
                        <b>Children</b>
                    </Item>
                ))
            ) : (
                <h2>Fetching data</h2>
            )} */}
            <hr />
            {/* <DataTypes /> */}
            {/* <SpecialTypes /> */}
            {/* <ArrObj /> */}
            {/* <ReturnType /> */}
            {/* <GenericType /> */}
            {/* <UseState /> */}
            {/* <UseReducer /> */}
            <EnumType />
            {/* <h2>{count}</h2>
            <Button setCount={setCount} color="brown" ha="ha" test="newProps">
                Increment
            </Button> */}
        </div>
    );
}

export default App;
