'use server';

import MutationButton from "@/components/mutation-button";
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
            <MutationButton
                name={loggedIn ? "Logout" : "Login"}
                icon={loggedIn ? <LogOut /> : <LogIn />}
                reload
                endpoint={`/api/authentication/${loggedIn ? "logout" : "login"}`}
            />
        </div>
    );
}