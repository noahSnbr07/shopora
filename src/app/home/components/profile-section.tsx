'use server';

import { LogIn, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface _props {
    picture: string;
    loggedIn: boolean;
    name: string;
}

export default async function ProfileSection({ picture, loggedIn = false, name }: _props) {


    return (
        <div className="flex gap-4">
            <Link
                className="size-8"
                href={`/user/${name}`}>
                <Image
                    className="aspect-square object-fill rounded-full"
                    src={picture}
                    height={32}
                    width={32}
                    alt="My Profile" />
            </Link>
            <form
                action={loggedIn ? "/authentication/logout" : "/authentication/login"}
                method="post">
                <button
                    className="px-4 h-8 bg-stack rounded-md"
                    type="submit">
                    {loggedIn ? <LogOut size={16} opacity={.5} /> : <LogIn size={16} opacity={.5} />}
                </button>
            </form>
        </div>
    );
}