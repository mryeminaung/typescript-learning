import { z } from "zod";

const Validation = () => {
    const UserSchema = z.object({
        // transform username to UpperCase
        username: z.string().toUpperCase(),
        // should be valid email format
        email: z.string().email(),
        bod: z.string().date(),
        // greater than or equal to 18
        age: z
            .number()
            .gte(18, {
                message: "You don't have permission to enter this place",
            })
            .optional(),
        // whether student or nor
        isStudent: z.boolean().optional(),
        // valid url
        url: z.string().url({ message: "Invalid URL" }),
        // vaid ip address
        ipAddr: z.string().ip(),
        // either English or Burmese
        languages: z.enum(["English", "Burmese"]),
        // must contain exactly 3 items or array of 3 string items
        skills: z.array(z.string()).length(2).optional(),

        password: z.string(),
        // optional: can have one or more relatives
        relatives: z.string().array().min(1).optional(),
    });

    type User = z.infer<typeof UserSchema>;

    const person: User = {
        username: "Ninja",
        password: "123",
        age: 19,
        bod: "2020-01-01",
        languages: "Burmese",
        ipAddr: "192.168.1.1",
        skills: ["react", "laravel"],
        url: "http://localhost:8000",
        email: "ninja@mail.com",
    };

    console.log(UserSchema.safeParse(person).success);
    console.log(UserSchema.safeParse(person)?.data);
    console.log(UserSchema.safeParse(person)?.error?.message);

    return <div>Validation</div>;
};

export default Validation;
