'use server';
import database from "@/config/database.config";

export default async function page({ params }: { params: Promise<{ name: string }> }) {

    const { name } = await params;

    const user = await database.user.findUnique({ where: { name }, include: { profile: true }, omit: { hash: true } })

    return (
        <div className="p-4">
            <pre> {JSON.stringify(user, null, 2)} </pre>
        </div>
    );
}