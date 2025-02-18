"use client";

import ProductVariant from "@/app/types/productVariant";
import React, { Fragment, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { classes } from "@/app/utils/css";
import Image from "next/image";
import ProductOption from "@/app/types/productOption";
import { extractProductVariantID, getFullProductVariantID, isDefaultProduct } from "@/app/utils/product";
import { useRouter, useSearchParams } from "next/navigation";

type VariantsPropsType = {
    variants: ProductVariant[];
    options: ProductOption[];
};

function Variants({ variants, options }: VariantsPropsType) {
    const [variantSelected, setVariantSelected] = useState<ProductVariant | null>(variants[0]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const variantID: string | null = searchParams.get("pvid");

    useEffect(() => {
        if (variantID) {
            const variantFullID: string = getFullProductVariantID(variantID);
            const variant: ProductVariant | undefined = variants.find((item) => item.id === variantFullID);
            if (variant) {
                setVariantSelected(variant);
            }
        }
    }, [variantID]);

    return (
        <section className={styles["variant"]}>
            <span className={styles["variant__price"]}>
                {variantSelected?.price.amount} {variantSelected?.price.currencyCode}
            </span>

            {!isDefaultProduct(variants) && (
                <Fragment>
                    {options?.[0] && <p className={styles["variant__option-label"]}>{options[0].name}</p>}
                    <div className={styles["variant-wrap"]}>
                        {variants.map((variant) => (
                            <div
                                className={classes(
                                    styles,
                                    `variant-wrap-item ${variantSelected?.id === variant.id ? "active" : ""}`,
                                )}
                                key={variant.id}
                                onClick={() => {
                                    console.info("variantID", variant.id);
                                    router.push(
                                        `${window.location.pathname}?pvid=${extractProductVariantID(variant.id)}`,
                                    );
                                }}
                            >
                                {variant?.image?.src && (
                                    <Image src={variant?.image?.src} alt="" width={40} height={40} />
                                )}
                                <span className={styles["variant-wrap-item__name"]}>{variant.title}</span>
                            </div>
                        ))}
                    </div>
                </Fragment>
            )}
        </section>
    );
}

export default Variants;
