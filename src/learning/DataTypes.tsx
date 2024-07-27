function DataTypes() {
    let name: string = "Ninja"; // string

    /* union operator -> |, var may be integer or string */
    let age: number | string = "22"; // number
    let isStudent: boolean = true; // bolean
    let hobbies: string[] = ["music", "football"]; // string of array
    let role: [number, string] = [1, "Hello"]; // tuple()

    /* object -> add ? after var name before : to make that var as optional */
    type Info = { name: string; city: string; streetNo?: number };

    let person: Info = { name: "Ninja", city: "Salingyi" };

    let lotsOfPeople: Info[] = [
        { name: "Bucky", city: "New York" },
        { name: "Emily", city: "California" },
        { name: "Micky", city: "New York" },
    ];

    console.log(name);
    console.log(age);
    console.log(isStudent);
    console.log(hobbies);
    console.log(person);
    console.log(lotsOfPeople);

    return <div>Basic types and Union type</div>;
}

export default DataTypes;
