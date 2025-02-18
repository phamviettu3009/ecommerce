import React from "react";
import "./style.scss";
import Product from "@/app/types/product";
import ProductCard from "../ProductCard";
import Link from "next/link";

type ProductContainerPropsType = React.HTMLProps<HTMLDivElement> & {
    products: Product[];
};

function ProductContainer({ products, ...rest }: ProductContainerPropsType) {
    return (
        <section {...rest} className={`product-container ${rest.className ?? ""}`}>
            {products.map((product) => {
                return (
                    <Link key={product.id} href={`products/${product.handle}`}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                );
            })}
        </section>
    );
}

export default ProductContainer;
