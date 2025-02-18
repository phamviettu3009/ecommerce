"use client";

import React from "react";
import styles from "./styles.module.scss";
import Filter from "../components/Filter";
import ProductContainer from "../components/ProductContainer";
import useProducts from "../hooks/useProducts";
import { Button } from "@mui/material";
import Sort from "../components/Sort";

function ProductsPage() {
    const { products, hasLoadAll, isLoading, getProducts } = useProducts();

    return (
        <div className={styles.page}>
            <div className="container-fluid ps-0 pe-0">
                <div className="row">
                    <div className="col-lg-3">
                        <Sort />
                        <Filter />
                    </div>
                    <div className="col-lg-9">
                        <ProductContainer className="mb-3" products={products} />
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
            </div>
        </div>
    );
}

export default ProductsPage;
