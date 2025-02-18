"use client";

import React from "react";
import styles from "./style.module.scss";
import useProducts from "../hooks/useProducts";
import ProductContainer from "../components/ProductContainer";
import Carousel from "../components/Carousel";
import { Button } from "@mui/material";

function HomePage() {
    const { products, getProducts, hasLoadAll, isLoading } = useProducts();

    return (
        <div className={styles.page}>
            <Carousel />
            <div>
                <ProductContainer className="mt-3 mb-3" products={products} />
                {!hasLoadAll && (
                    <div className={styles.load_more}>
                        <Button
                            className={styles.load_more_button}
                            disabled={isLoading}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            onClick={getProducts}
                        >
                            Tải thêm
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
