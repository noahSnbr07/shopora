'use server';

import Image from "next/image";

interface _props {
    source: string;
    name: string;
}

/** 
 * @param source image source prop
 * @param name fallback/loader text
 * @returns responsive aside image
 */
export default async function Showcase({ source, name }: _props) {

    return (
        <div className="flex flex-col gap-4 p-4 border-r-2 border-stack max-w-1/4 min-w-[200px]">
            <div className="w-full">
                <Image
                    className="object-contain rounded-xl"
                    width={500}
                    height={500}
                    src={source}
                    alt={name}
                    title={name}
                    loading="eager"
                />
            </div>
        </div>
    );
}