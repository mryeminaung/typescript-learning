import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
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
            .min(5, { message: "Passwords do not match" }),
        terms: z.boolean(),
        age: z
            .number()
            .min(18, { message: "You're not allowed to register" })
            .max(65, { message: "Age must be under 65 years" }),
        gender: z.enum(["male", "female", "other"]),
        skills: z.string().array().length(3),
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
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormSchema>({
        resolver: zodResolver(schema),
    });

    const selectedSkills = watch("skills");

    const onSubmit = (data: FormSchema) => {
        console.log(data);
        console.log(selectedSkills);
    };

    return (
        <form
            className="mt-4 dark:bg-slate-200 p-10 rounded-md"
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
            <p className="mt-2">Skills : </p>
            {/* checkbox inputs */}
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <input
                        className="border rounded-md p-2"
                        {...register("skills")}
                        type="checkbox"
                        name="react"
                        id="react"
                        value="react"
                    />
                    <label htmlFor="react">React</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        className="border rounded-md p-2"
                        {...register("skills")}
                        type="checkbox"
                        name="laravel"
                        id="laravel"
                        value="laravel"
                    />
                    <label htmlFor="laravel">Laravel</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        className="border rounded-md p-2"
                        {...register("skills")}
                        type="checkbox"
                        name="python"
                        id="python"
                        value="python"
                    />
                    <label htmlFor="python">Python</label>
                </div>
            </div>
            {/* radio inputs */}
            <p className="mt-2">Select your gender : </p>
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <input
                        className="border rounded-md p-2"
                        {...register("gender")}
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        className="border rounded-md p-2"
                        {...register("gender")}
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        className="border rounded-md p-2"
                        {...register("gender")}
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                    />
                    <label htmlFor="other">Other</label>
                </div>
                {errors.gender && (
                    <span className="text-red-500">
                        {errors.gender.message}
                    </span>
                )}
            </div>
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
            <button className="bg-slate-200 dark:bg-slate-400 p-2 rounded-md">Submit</button>
            <DevTool control={control} /> {/* set up the dev tool */}
        </form>
    );
};

export default ValidationTwo;
