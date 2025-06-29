import { NextResponse, type NextRequest } from 'next/server'
import APIResponse from './interfaces/api-response'

export async function middleware(request: NextRequest) {

    //retrieve JWT
    const cookie = request.headers.get('cookie') || '';

    //fetch verification endpoint
    const url: URL = new URL("/api/authentication/authenticate", request.url);
    const options: RequestInit = { headers: { 'cookie': cookie, } }
    const response = await fetch(url, options);

    //validate response
    const data: APIResponse = await response.json();
    if (data.success) return NextResponse.next();
    else return NextResponse.redirect(new URL("/", request.url));
}

//routes to protect
export const config = {
    matcher: ["/home"],
}