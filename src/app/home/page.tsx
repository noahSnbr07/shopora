'use server';

import { ProductList } from "@/components/product-utils";
import database from "@/config/database.config";

export default async function page() {

    const products = await database.product.findMany();

    return (
        <div className="size-full">
            <ProductList products={products} />
        </div>
    );
}