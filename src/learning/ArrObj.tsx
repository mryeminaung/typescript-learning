function ArrObj() {
    type Address = {
        street?: string;
        city: string;
    };

    type Person = {
        name: string;
        age: number;
        isStudent: boolean;
        address: Address;
    };

    let person1: Person = {
        name: "John",
        age: 20,
        isStudent: true,
        address: { city: "New York" },
    };

    let person2: Person = {
        name: "Mock",
        age: 30,
        isStudent: false,
        address: { city: "New York" },
    };

    let person3: Person = {
        name: "Bob",
        age: 23,
        isStudent: true,
        address: { city: "New York" },
    };

    let ages: number[] = [20, 30, 40, 50];

    let fruits: Array<string> = [];
    let nums: Array<number> = [];

    nums.push(1);
    nums.push(2);
    nums.push(3);

    fruits.push("apple");
    fruits.push("banana");
    fruits.push("orange");

    let people: Person[] = [];

    type isOkay = true | false;
    type WindowStates = "open" | "closed" | "minimized";

    let state: WindowStates = 'closed';
    let name: string | undefined;

    let test: isOkay = 0;
    name = 2;

    console.log(state);
    console.log(test);
    console.log(name);

    people.push(person1);
    people.push(person2);
    people.push(person3);

    console.log(nums);
    console.log(fruits);
    console.log(ages);
    console.log(people);

    return <div>ArrObj</div>;
}

export default ArrObj;
