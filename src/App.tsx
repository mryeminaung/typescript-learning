import "./App.css";
import ArrObj from "./learning/ArrObj";
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
            {/* <SpecialTypes /> */}
            <ArrObj />
        </>
    );
}

export default App;
