import getAuth from '@/functions/get-auth';
import { redirect } from 'next/navigation';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(_request: NextRequest): Promise<NextResponse> {

    const auth = await getAuth();
    if (!auth) redirect("/authentication");
    else redirect("/home");
}