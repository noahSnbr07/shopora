import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod, string } from "zod";

//schema to validate inputs on the auth page
const schema = zod.object({
    name: string()
        .min(4, "Minimum name length: 4")
        .max(24, "Maximum name length: 24"),
    password: string()
        .min(4, "Minimum password length: 4")
        .max(24, "Maximum password length: 24")
});

//build form data type
type FormData = zod.infer<typeof schema>;

//resolver to handle inputs
const resolver = zodResolver(schema);

export {
    type FormData,
    resolver,
}