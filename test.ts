import { z } from 'zod'

const UserSchema = z.object({
    id: z.number(),
    email: z.string(),
    username: z.string(),
    age: z.coerce.string(),
    address: z.object({
        street: z.string(),
        suite: z.string(),
        city: z.string(),
        zipcode: z.string()
    })
}).partial();

/* 

.omit => exclude specific props from original
.pick => include specific props from original

.partial() => make all props as optional
.deepPartial() => make all props including nested (objects, arrays, tuples) as optional


*/

type User = z.infer<typeof UserSchema>;

const NewUser: User = {};
console.log(NewUser);


const stringArray = z.array(z.string());

console.log(stringArray.element);

const Add = (a: number, b: number): number | unknown => {
    return a + b + '';
}
console.log(Add(1, 1));

type Role = "admin" | "teacher" | "student";

interface Admin {
    role: Role,
    permissions: string[]
}

interface Test {
    age: number,
}

interface NormalUser extends Admin, Test {
    username: string
}

const user: NormalUser = {
    username: 'johndoe',
    role: 'student',
    permissions: ['edit', 'update'],
    age: 18
}

console.log(user);


