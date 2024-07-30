import { useState } from "react";

interface AuthUser {
    name: string;
    email: string;
}

function UseState() {
    // <AuthUser | null> means that user might be null or obj
    const [user, setUser] = useState<AuthUser | null>(null);
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => setUser({ name: "John", email: "Wick" });

    const handleLogOut = () => setUser(null);

    return (
        <>
            <h2>useState with Typescript</h2>
            <button onClick={handleLogOut}>LogOut</button>
            <button onClick={handleLogin}>LogIn</button>
            <p>Name : {user?.name}</p>
            <p>Email : {user?.email}</p>
        </>
    );
}

export default UseState;
