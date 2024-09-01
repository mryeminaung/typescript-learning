import { z } from "zod";

const UserSchema = z.object({
    username: z.string(),
});

type User = z.infer<typeof UserSchema>;

const person: User = { username: "Ninja" };

console.log(UserSchema.parse(person));