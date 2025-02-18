import React from "react";
import styles from "./styles.module.scss";
import productService from "@/app/services/server/product";
import ImageView from "./ImageView";
import { classes } from "@/app/utils/css";
import VariantPrice from "@/app/types/variantPrice";
import ProductDetail from "@/app/types/productDetail";
import Variants from "./Variants";
import Description from "./Description";
import QuantityControl from "./QuantityControl";

type ProductPageProps = {
    params: {
        handle?: string | undefined;
    };
};

async function ProductPage({ params }: ProductPageProps) {
    const handle: string | undefined = (await params)?.handle;

    if (handle === undefined) {
        return null;
    }

    const product: ProductDetail | null = await productService.getProduct(decodeURIComponent(handle));

    if (product === null) {
        return (
            <div className={styles.page}>
                <h4>Product not found!</h4>
            </div>
        );
    }

    const { title, variants, descriptionHtml } = product;
    const { amount: minAmount, currencyCode }: VariantPrice = product?.priceRange.minVariantPrice;
    const { amount: maxAmount }: VariantPrice = product?.priceRange.maxVariantPrice;

    console.info("productID:", product.id);

    return (
        <div className={styles.page}>
            <div className="container-fluid ps-0 pe-0">
                <div className="row">
                    <div className="col-lg-4">
                        <section className={styles["card-view"]}>
                            <ImageView product={product} />
                        </section>
                    </div>
                    <div className="col-lg-5">
                        <section className={classes(styles, "card-view prod-info-view")}>
                            <div className={classes(styles, "prod-info-view__title")}>{title}</div>
                            {minAmount !== maxAmount && (
                                <div className={classes(styles, "prod-info-view__price")}>
                                    ({minAmount} - {maxAmount}) {currencyCode}
                                </div>
                            )}
                            <Variants options={product.options} variants={variants.nodes} />
                        </section>

                        <Description descriptionHtml={descriptionHtml} />
                    </div>
                    <div className="col-lg-3">
                        <QuantityControl product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
