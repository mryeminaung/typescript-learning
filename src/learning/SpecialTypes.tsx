function SpecialTypes() {
    let name: never;

    /* can be any data types */
    let age: any;

    age = 1;
    age = "1";
    age = {};

    /* alias type
        -> type
        -> interface
    */
    interface Person {
        name: string;
        age?: number;
    }

    // use extends keyword to add props from other interface
    interface Info extends Person {
        skill: string[];
        gender: string;
    }

    type X = {
        a: string;
        b: number;
    };

    /* extending props of type X in type Y  */
    type Y = X & {
        c: string;
        d: number;
    };

    let y: Y = {
        a: "A",
        b: 1,
        c: "C",
        d: 2,
    };

    let obj: Info = {
        name: "Ninja",
        gender: "male",
        age: 22,
        skill: ["html", "css", "js"],
    };

    console.log(y);
    console.log(obj);

    return <div>SpecialTypes</div>;
}

export default SpecialTypes;
