'use server';

import { CSSProperties } from "react";

interface _props {
    name: string;
    price: number;
    description: string;
    count: number;
    unavailable: boolean;
}

export default async function MainArea({ name, price, description, count, unavailable }: _props) {

    return (
        <div className="flex-1 flex flex-col gap-4 p-4">
            <h1 className="font-bold text-3xl"> {name} </h1>
            <i className="text-sm italic"> {description} </i>
            <div className="w-full border-2 border-stack h-1 rounded-full" />
            <b className="text-lg"> {price} € </b>
            <AvailabilityIndicator available={!unavailable} />
            <i className="text-sm"> Items amount: {count} </i>
        </div>
    );
}

function AvailabilityIndicator({ available = true }: { available: boolean; }) {

    const stylesheet: CSSProperties = {
        background: available ? "green" : "red",
    }

    return (
        <div className="flex gap-4 items-center">
            <div
                style={stylesheet}
                className="size-2 rounded-full animate-pulse"></div>
            <p className="text-sm"> {available ? "In Stock" : "Out of Stock"} </p>
        </div>
    )
}