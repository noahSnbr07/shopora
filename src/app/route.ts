import getAuth from '@/functions/get-auth';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {

    //check auth
    const auth = await getAuth();
    if (!auth) redirect("/authentication");
    else redirect("/home");
}