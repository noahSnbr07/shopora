'use server';
import database from "@/config/database.config";
import ArtworkSection from "../components/artwork-section";
import { redirect } from "next/navigation";
import ListingsSection from "../components/listings-section";

export default async function page({ params }: { params: Promise<{ name: string }> }) {

    //retrieve name from params
    const { name } = await params;

    //retrieve user except hash from name
    const user = await database.user.findUnique({
        where: { name },
        include: { profile: { include: { listed: { take: 10 } } } }, omit: { hash: true }
    });

    if (!user) redirect("/");

    return (
        <div className="flex-1 p-4 flex">
            <ArtworkSection
                {...user}
            />
            <ListingsSection
                listed={user.profile?.listed || []}
                {...user}
            />
        </div>
    );
}