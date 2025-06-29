'use server';
import database from "@/config/database.config";

export default async function page({ params }: { params: Promise<{ name: string }> }) {

    //retrieve name from params
    const { name } = await params;

    //retrieve user except hash from name
    const user = await database.user.findUnique({ where: { name }, include: { profile: true }, omit: { hash: true } })

    return (
        <div className="p-4">
            <pre> {JSON.stringify(user, null, 2)} </pre>
        </div>
    );
}