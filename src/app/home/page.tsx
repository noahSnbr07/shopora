'use server';

import { ProductList } from "@/components/product-utils";
import database from "@/config/database.config";

export default async function page() {

    //retrieve all products
    //TODO: limit take, filtering, querying etc
    const products = await database.product.findMany();

    return (
        <div className="flex-1 flex">
            <ProductList products={products} />
        </div>
    );
}