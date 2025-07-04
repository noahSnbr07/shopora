'use server';

import database from "@/config/database.config";
import getAuth from "@/functions/get-auth";
import { redirect } from "next/navigation";
import Showcase from "../components/showcase";
import MainArea from "../components/main-area";


export default async function page({ params }: { params: Promise<{ id: string }> }) {

    //retrieve id, auth state
    const { id } = await params;
    const auth = await getAuth();
    if (!auth || !id) redirect("/");

    //retrieve product via uuid
    const product = await database.product.findUnique({ where: { id } });
    if (!product) redirect("/");

    return (
        <div className="size-full flex">
            <Showcase {...product} />
            <MainArea {...product} />
        </div>
    );
}