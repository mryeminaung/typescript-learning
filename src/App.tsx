import "./App.css";

type welcomeProps = {
    name: string;
};

const Welcome = ({ name }: welcomeProps) => {
    return <h2>Hello {name}</h2>;
};

function App() {
    return (
        <>
            <h1>React with Typescript</h1>
            <Welcome name="Bucky" />
        </>
    );
}

export default App;
