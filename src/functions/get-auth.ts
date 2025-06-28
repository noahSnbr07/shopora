"use server";

import Auth from "@/interfaces/get-auth";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// This function returns the decoded data if valid, or null if invalid
export default async function getAuth(): Promise<Auth | null> {

    //retrieve key, token
    const cookieStore = await cookies();
    const token = cookieStore.get("shopora-token")?.value as string;
    const secret = process.env.JWT_SECRET as string;

    try {

        //decode token
        const decoded = jwt.verify(token, secret);
        if (decoded) return decoded as unknown as Auth;
    } catch {

        //error
        return null;
    }

    //error
    return null;
}