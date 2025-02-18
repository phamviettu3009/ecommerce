"use client";

import React, { Fragment, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { classes } from "@/app/utils/css";
import ProductDetail from "@/app/types/productDetail";
import { getVariantByID, isDefaultProduct } from "@/app/utils/product";
import Image from "next/image";
import EmptyImage from "@/app/assets/empty-image.png";
import { useSearchParams } from "next/navigation";
import ProductVariant from "@/app/types/productVariant";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

type QuantityControlPropsType = {
    product: ProductDetail;
};

function QuantityControl({ product }: QuantityControlPropsType) {
    const searchParams = useSearchParams();
    const variantID: string | null = searchParams.get("pvid");
    const productImage: string | undefined = product?.images?.nodes?.[0]?.src;

    const [variant, setVariant] = useState<ProductVariant | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if (variantID) {
            const variant: ProductVariant | undefined = getVariantByID(product, variantID);
            if (variant) {
                setVariant(variant);
            } else {
                setVariant(product.variants.nodes[0]);
            }
        } else {
            setVariant(product.variants.nodes[0]);
        }
        setQuantity(1);
    }, [variantID]);

    const plusQuantity = () => {
        setQuantity(quantity + 1);
    };

    const minusQuantity = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1);
        }
    };

    const onChangeInput = (e: any) => {
        const value: number = e.target.value as unknown as number;
        setQuantity(value);
    };

    const onBlurInput = (e: any) => {
        if (e.target.value === "") setQuantity(1);
    };

    const renderHeader = (): React.JSX.Element => {
        if (isDefaultProduct(product.variants.nodes)) {
            return (
                <Fragment>
                    <p className={styles["title"]}>{product.title}</p>
                    <Image src={productImage || EmptyImage} alt="" width={50} height={50} />
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <p className={styles["title"]}>
                        {product?.title} ({variant?.title})
                    </p>
                    <Image src={variant?.image?.src || EmptyImage} alt="" width={50} height={50} />
                </Fragment>
            );
        }
    };

    const renderQuantityControl = (): React.JSX.Element => {
        const pricePerOne: number = Number(variant?.price.amount ?? 0);
        const pricePerQuantity: number = pricePerOne * quantity;
        const currencyCode: string | undefined = variant?.price.currencyCode;

        return (
            <div>
                <div className={styles["quantity-wrap"]}>
                    <div className={styles["quantity-btn"]} onClick={minusQuantity}>
                        <RemoveIcon fontSize="small" />
                    </div>
                    <input
                        className={styles["quantity-input"]}
                        type="number"
                        min="1"
                        max="99"
                        onInput={(e) => (e.target["value"] = e.target["value"].slice(0, 3))}
                        value={quantity}
                        onChange={onChangeInput}
                        onBlur={onBlurInput}
                    ></input>
                    <div className={styles["quantity-btn"]} onClick={plusQuantity}>
                        <AddIcon fontSize="small" />
                    </div>
                </div>
                <p className="fw-bold mt-2 mb-2">Tạm tính</p>
                <p className="fs-5">
                    {pricePerQuantity} {currencyCode}
                </p>
            </div>
        );
    };

    const renderBottom = (): React.JSX.Element => {
        return (
            <Fragment>
                <Button className="bg-danger" variant="contained">
                    Mua ngay
                </Button>
                <Button variant="outlined">Thêm vào giỏ hàng</Button>
            </Fragment>
        );
    };

    return (
        <section className={classes(styles, "card-view")}>
            <div className={styles["quantity-control-view"]}>
                {renderHeader()}
                {renderQuantityControl()}
                {renderBottom()}
            </div>
        </section>
    );
}

export default QuantityControl;
