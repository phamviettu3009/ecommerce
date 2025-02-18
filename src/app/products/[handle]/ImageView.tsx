"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import EmptyImage from "@/app/assets/empty-image.png";
import CarouselProductImage from "@/app/components/CarouselProductImage";
import styles from "./styles.module.scss";
import Product from "@/app/types/product";

type ImageViewPropsType = {
    product: Product;
};

function ImageView({ product }: ImageViewPropsType) {
    const [imageSelected, setImageSelected] = useState<string | null>(product.images.nodes[0]?.src);
    const productImages: string[] = product?.images.nodes.map((image) => image.src) ?? [];

    const onImageChange = (image: string) => {
        setImageSelected(image);
    };

    return (
        <Fragment>
            <Image
                className={styles.image_view__main_picture}
                alt=""
                src={imageSelected || EmptyImage}
                width={200}
                height={200}
            />

            <CarouselProductImage className="mt-3" images={productImages} onChangeImage={onImageChange} />
        </Fragment>
    );
}

export default ImageView;
