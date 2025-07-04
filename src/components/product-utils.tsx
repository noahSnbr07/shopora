'use client';

import { type Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface _product_props {
    product: Product;
}

interface _product_list_props {
    products: Product[];
}

//single product
function Product({ product }: _product_props) {

    return (
        <Link
            href={`/product/${product.id}`}
            className="flex flex-col gap-4 p-4 border-stack border rounded-xl self-start">
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
        </Link>
    );
}

//list of products: flex-grows, scrollable
function ProductList({ products }: _product_list_props) {

    return (
        <div className="grid flex-1 overflow-y-scroll grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {products.map((product, _index: number) => <Product key={_index} product={product} />)}
        </div>
    );
}

export {
    Product,
    ProductList
}