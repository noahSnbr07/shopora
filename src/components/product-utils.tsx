'use client';

import { type Product } from "@prisma/client";
import Image from "next/image";

interface _product_props {
    product: Product;
}

interface _product_list_props {
    products: Product[];
}

function Product({ product }: _product_props) {

    return (
        <div className="flex flex-col gap-4 p-4 border-stack border rounded-xl">
            <Image
                src={product.source}
                alt={product.name}
                title={product.name}
                width={500}
                height={500}
                className="w-full rounded-md"
                style={{ objectFit: "contain" }} />
            <b className="underline"> {product.name} </b>
            <i> ${product.price} </i>
        </div>
    );
}

function ProductList({ products }: _product_list_props) {

    return (
        <div className="grid flex-1 overflow-y-scroll grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, _index: number) => <Product key={_index} product={product} />)}
        </div>
    );
}

export {
    Product,
    ProductList
}