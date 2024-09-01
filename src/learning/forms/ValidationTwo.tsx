import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
    .object({
        username: z
            .string()
            .min(5, { message: "username must be at lest 5 characters" })
            .max(20),
        email: z.string().email({ message: "Invalid email address" }),
        password: z
            .string()
            .min(5, { message: "Password must contain at least 5 characters" }),
        confirmPassword: z
            .string()
            .min(5, { message: "Passwords don't match" }),
        terms: z.boolean(),
        age: z
            .number()
            .min(18, { message: "You're not allowed to register" })
            .max(65, { message: "Age must be under 65 years" }),
        // gender: z.enum(["male", "female", "other"]),
        // address: z.object({
        //     street: z.string().min(5).max(50),
        //     city: z.string().min(2).max(50),
        //     state: z.string().min(2).max(50),
        //     zipCode: z.string().min(5),
        // }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do no match",
        path: ["confirmPassword"],
    });

type FormSchema = z.infer<typeof schema>;

const ValidationTwo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };

    return (
        <form
            className="mt-4"
            action=""
            method="post"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className="text-center font-bold text-2xl mb-2">
                Form Validation
            </h3>
            <input
                className="border block w-full mt-2 mb-1 rounded-md p-2"
                {...register("username")}
                type="text"
            />
            {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
            )}
            <input
                className="border block w-full mt-2 mb-1 rounded-md p-2"
                {...register("email")}
                type="email"
            />
            {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
            )}
            <input
                className="border block w-full mt-2 mb-1 rounded-md p-2"
                {...register("age", { valueAsNumber: true })}
                type="number"
            />
            {errors.age && (
                <span className="text-red-500">{errors.age.message}</span>
            )}
            <input
                className="border block w-full mt-2 mb-1 rounded-md p-2"
                {...register("password")}
                type="password"
            />
            {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
            )}
            <input
                className="border block w-full mt-2 mb-1 rounded-md p-2"
                {...register("confirmPassword")}
                type="password"
            />
            {errors.confirmPassword && (
                <span className="text-red-500">
                    {errors.confirmPassword.message}
                </span>
            )}
            <div className="flex items-center gap-x-2">
                <input
                    {...register("terms")}
                    type="checkbox"
                    name="terms"
                    id="terms"
                />
                <label htmlFor="terms">Accept the terms and conditions</label>
            </div>
            <br />
            <button className="bg-slate-200 p-2 rounded-md">Submit</button>
        </form>
    );
};

export default ValidationTwo;
