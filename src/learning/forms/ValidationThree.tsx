import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    email: z.string(),
    password: z.string(),
    choice: z.string(),
    name: z.object({
        firstName: z.string(),
        lastName: z.string(),
    }),
    languages: z.string().array(),
    gender: z.string(),
});

type FormSchema = z.infer<typeof schema>;

export default function ValidationThree() {
    const {
        register,
        watch,
        setValue,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            languages: [],
        },
    });

    const handleCheckboxChange = (language: string) => {
        const currentLanguages = watch("languages");
        if (currentLanguages?.includes(language)) {
            setValue(
                "languages",
                currentLanguages.filter((lang) => lang !== language)
            );
        } else {
            setValue("languages", [...currentLanguages, language]);
        }
    };

    const languages = ["HTML", "CSS", "JavaScript"];

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };
    return (
        <form className="m-3" action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex gap-2">
                <div className="mb-3">
                    <button
                        type="button"
                        onClick={() => clearErrors()}
                        className="btn btn-primary"
                    >
                        Clear All Errors
                    </button>
                </div>
                <div className="mb-3">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="btn btn-primary"
                    >
                        Reset
                    </button>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                    First Name
                </label>
                <input
                    type="text"
                    {...register("name.firstName", {
                        required: {
                            value: true,
                            message: "First name is required",
                        },
                        minLength: {
                            value: 2,
                            message:
                                "First name should be at least 2 characters long",
                        },
                        maxLength: {
                            value: 20,
                            message:
                                "First name should not exceed 20 characters",
                        },
                    })}
                    className={`form-control ${
                        errors.name?.firstName ? "is-invalid" : ""
                    }`}
                    id="firstname"
                />
                {errors.name && (
                    <div className="text-danger">
                        {errors.name?.firstName?.message}
                    </div>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                    Last Name
                </label>
                <input
                    type="text"
                    {...register("name.lastName")}
                    className="form-control"
                    id="lastname"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
            <h6 className="">Choose Your Fav Languages</h6>
            <div className="form-check mb-3">
                {languages.map((lang) => (
                    <div key={lang} className="mb-1">
                        <input
                            {...register("languages")}
                            type="checkbox"
                            name={lang.toLowerCase()}
                            id={lang.toLowerCase()}
                            checked={watch("languages")?.includes(lang)}
                            onChange={() => handleCheckboxChange(lang)}
                        />
                        <label htmlFor={lang.toLowerCase()}>{lang}</label>
                    </div>
                ))}
            </div>

            <h6 className="">Choose Your Gender</h6>

            <div className="form-check mb-3">
                <div className="mb-1">
                    <input
                        {...register("gender")}
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value={"male"}
                        id="male"
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
                    </label>
                </div>
                <div className="mb-1">
                    <input
                        {...register("gender")}
                        className="form-check-input"
                        name="gender"
                        type="radio"
                        value={"female"}
                        id="female"
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>
                <div className="mb-1">
                    <input
                        {...register("gender")}
                        className="form-check-input"
                        type="radio"
                        value={"other"}
                        name="gender"
                        id="other"
                    />
                    <label className="form-check-label" htmlFor="other">
                        Other
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <select
                    {...register("choice")}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    id="password"
                />
            </div>
        </form>
    );
}
