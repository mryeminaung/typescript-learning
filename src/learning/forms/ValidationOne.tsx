import { useForm } from "react-hook-form";
import { z } from "zod";

const BasicSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    phone: z.string(),
    website: z.string(),
});

const BasicAddressSchema = z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
});

const BasicGeoSchema = z.object({
    geo: z.object({
        lat: z.string(),
        lng: z.string(),
    }),
});

const BasicCompanySchema = z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
});

const UserWithGeo = BasicAddressSchema.merge(BasicGeoSchema);

const ExtendSchema = BasicSchema.extend({
    company: BasicCompanySchema,
}).extend({
    address: UserWithGeo,
});

type User = z.infer<typeof ExtendSchema>;

const JustAddress = ExtendSchema.pick({ address: true });
const JustCompany = ExtendSchema.pick({ company: true });

type AddressSchema = z.infer<typeof JustAddress>;
type CompanySchema = z.infer<typeof JustCompany>;

const TAddress: AddressSchema = {
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: "",
        },
    },
};

console.log(TAddress);

const TCompany: CompanySchema = {
    company: {
        name: "",
        catchPhrase: "",
        bs: "",
    },
};

console.log(TCompany);

const ValidationOne = () => {
    const { register } = useForm<User>();

    console.log(register);

    return <div>ValidationOne</div>;
};

export default ValidationOne;
