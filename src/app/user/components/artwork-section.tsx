'use server';

import Image from "next/image";

interface _props {
    source: string;
    name: string;
    created: Date;
    lastSignIn: Date;
}

export default async function ArtworkSection({ source, name, created, lastSignIn }: _props) {
    console.log({ source, name, created, lastSignIn })
    return (
        <div className="flex flex-col gap-4 p-4 border-r-2 border-stack h-full">
            <Image
                width={200}
                height={200}
                alt="User"
                title="User"
                src={source}
                className="object-cover aspect-square rounded-full"
            />
            <b className="text-lg"> {name} </b>
            <div className="flex flex-col gap-1">
                <i className="opacity-50"> joined: {created.toLocaleDateString()} </i>
                <i className="opacity-50"> last log in: {lastSignIn.toLocaleDateString()} </i>
            </div>
        </div>
    );
}