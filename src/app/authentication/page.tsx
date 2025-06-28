'use server';

import Card from "./components/card";

export default async function page() {


    return (
        <div className="size-full flex justify-center items-center">
            <Card />
        </div>
    );
}