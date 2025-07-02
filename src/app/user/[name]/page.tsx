'use server';
import database from "@/config/database.config";
import ArtworkSection from "../components/artwork-section";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: Promise<{ name: string }> }) {

    //retrieve name from params
    const { name } = await params;

    //retrieve user except hash from name
    const user = await database.user.findUnique({
        where: { name },
        include: { profile: true }, omit: { hash: true }
    });

    if (!user) redirect("/");

    return (
        <div className="p-4">
            <ArtworkSection
                {...user}
            />
        </div>
    );
}