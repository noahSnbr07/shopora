import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod, string } from "zod";

const schema = zod.object({
    name: string()
        .min(4, "Minimum name length: 4")
        .max(24, "Maximum name length: 24"),
    password: string()
        .min(4, "Minimum password length: 4")
        .max(24, "Maximum password length: 24")
});

type FormData = zod.infer<typeof schema>;

const resolver = zodResolver(schema);

export {
    type FormData,
    resolver,
}