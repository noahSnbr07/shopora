import APIResponse from '@/interfaces/api-response';
import APIResponseTemplate from '@/templates/api-responses';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(): Promise<NextResponse<APIResponse>> {

    const cookieStore = await cookies();

    //destroy token
    cookieStore.delete("shopora-token");

    return NextResponse.json(APIResponseTemplate.ok("Access Token destroyed successfully"));
}