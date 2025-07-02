'use server';

import { ProductList } from "@/components/product-utils";
import { Product } from "@prisma/client";

interface _props {
    name: string;
    listed: Product[];
}

export default async function ListingsSection({ name, listed }: _props) {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4">
            <b className="text-xl">{name}&apos;s 10 recent Products</b>
            <div className="flex-1 overflow-y-auto">
                <ProductList products={listed} />
            </div>
        </div>
    );
}