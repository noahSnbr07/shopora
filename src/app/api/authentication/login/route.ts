import database from '@/config/database.config';
import APIResponse from '@/interfaces/api-response';
import APIResponseTemplate from '@/templates/api-responses';
import { compare } from 'bcrypt';
import { NextResponse, NextRequest } from 'next/server';
import { sign } from "jsonwebtoken";
import { options } from '@/assets/assets';
import { cookies } from 'next/headers';

export async function POST(_request: NextRequest): Promise<NextResponse<APIResponse>> {

    //utilize cookies
    const cookieStore = await cookies();

    //operate json web token
    const JWT_SECRET = process.env.JWT_SECRET as string;

    // retrieve form data
    const formData = _request.formData();

    // extract values
    const name = (await formData).get("name") as string;
    const password = (await formData).get("password") as string;

    //verify value's schema
    const invalidName: boolean = name === null || name.length < 4;
    const invalidPassword: boolean = password === null || password.length < 4;

    if (invalidName || invalidPassword)
        return NextResponse.json(APIResponseTemplate.badRequest(null, "Either name or password malformed"));

    try {

        //check weather target user exists
        const targetUser = await database.user.findUnique({ where: { name } });
        if (!targetUser) return NextResponse.json(APIResponseTemplate.notFound("User not found"));

        //compare and check match
        const match: boolean = await compare(password, targetUser.hash);
        if (!match) return NextResponse.json(APIResponseTemplate.unauthorized("Password incorrect"));

        //extract safe-to-store data
        const { hash, ...safeUser } = targetUser;  // eslint-disable-line

        //create jwt
        const token: string = sign(safeUser, JWT_SECRET, options);

        //set the token
        cookieStore.set({
            name: "shopora-token",
            value: token,
            maxAge: 60 * 60 * 48,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            priority: "high",
            sameSite: "lax",
        });

        return NextResponse.json(APIResponseTemplate.ok());

    } catch (error) {
        return NextResponse.json(APIResponseTemplate.internalServerError(error instanceof Error ? error : "Uncaught Error"))
    }
}