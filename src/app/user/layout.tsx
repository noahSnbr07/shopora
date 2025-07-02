'use server';
import { banner } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface _props {
    children: React.ReactNode;
}

async function layout({ children }: _props) {


    return (
        <div className="size-full flex flex-col">
            <header className="flex p-4 gap-4">
                <Link
                    href={"/"}
                    className="h-8 flex gap-4 items-center">
                    <Image
                        className="opacity-50"
                        src={banner}
                        height={32}
                        alt="Home Link"
                        title="Home Link" />
                    <b className="opacity-50"> User </b>
                </Link>
            </header>
            <main className="flex-1 flex gap-4">
                {children}
            </main>
        </div>
    );
}

export default layout;