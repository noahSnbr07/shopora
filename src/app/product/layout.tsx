'use server';
import { banner } from "@/assets/assets";
import database from "@/config/database.config";
import getAuth from "@/functions/get-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "../home/components/searchbar";
import ProfileSection from "../home/components/profile-section";

interface _props {
    children: React.ReactNode;
}

export default async function layout({ children }: _props) {

    //retrieve user by token
    const auth = await getAuth();
    const user = await database.user.findUnique({ where: { id: auth!.id } });

    return (
        <div className="flex flex-col w-dvw h-dvh overflow-hidden">
            <header className="flex gap-4 border-b-2 justify-between border-stack p-4">
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
                <Searchbar />
                <ProfileSection
                    loggedIn={auth !== null}
                    picture={user!.source}
                    name={user?.name || "not-found"}
                />
            </header>
            <main className="flex-1 flex overflow-y-auto">
                {children}
            </main>
        </div>
    );
}