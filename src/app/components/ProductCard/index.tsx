import Product from "@/app/types/product";
import React from "react";
import Image from "next/image";
import "./style.scss";
import EmptyImage from "@/app/assets/empty-image.png";

type ProductCardPropsType = React.HTMLProps<HTMLDivElement> & {
    product: Product;
};

function ProductCard({ product, ...rest }: ProductCardPropsType) {
    return (
        <div {...rest} className="prod-card">
            <Image
                className={"prod-card__img"}
                alt=""
                src={product.images.nodes[0]?.src || EmptyImage}
                width={200}
                height={200}
            />
            <div className="prod-card-bottom">
                <p className="prod-card-bottom__title">{product.title}</p>
                <p className="prod-card-bottom__price">
                    {product.priceRange.maxVariantPrice.amount} {product.priceRange.maxVariantPrice.currencyCode}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
