import "./App.css";
import DataTypes from "./learning/DataTypes";
import SpecialTypes from "./learning/SpecialTypes";

type welcomeProps = {
    name: string;
};

const Welcome = ({ name }: welcomeProps) => {
    return <h2>Hello, {name}</h2>;
};

function App() {
    return (
        <>
            <h1>React With Typescript</h1>
            <Welcome name="Creative Ninja" />
            {/* <DataTypes /> */}
            <SpecialTypes />
        </>
    );
}

export default App;
