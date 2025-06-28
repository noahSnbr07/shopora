'use server';
import { banner } from "@/assets/assets";
import database from "@/config/database.config";
import getAuth from "@/functions/get-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface _props {
    children: React.ReactNode;
}

export default async function layout({ children }: _props) {

    const auth = await getAuth();
    const user = await database.user.findUnique({ where: { id: auth!.id } });

    return (
        <div className="size-full flex flex-col">
            <header className="flex border-b-2 justify-between border-stack p-4">
                <Link
                    className="opacity-50 hover:opacity-100"
                    href={"/"}
                    title="Home Page">
                    <Image
                        src={banner}
                        height={32}
                        alt="Home Page Banner"
                        title="Home Page Banner" />
                </Link>
                <Link
                    className="size-8"
                    href={`/user/me`}>
                    <Image
                        className="aspect-square object-fill rounded-full"
                        src={user!.source || ""}
                        height={32}
                        width={32}
                        alt="My Profile" />
                </Link>
            </header>
            <main>

            </main>
        </div>
    );
}